using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ax6.Domain;
using Ax6.Domain.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Ax6.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private Ax6Context _context;

        public ReviewController(Ax6Context context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getreviewsforsubmission")]
        public async Task<IActionResult> GetReviewsForSubmission(int id)
        {
            if (_context.Submissions.Where(x => x.Id == id).Count() == 0)
            {
                return BadRequest(id);
            }
            var reviews = _context.Reviews.Where(x => x.SubmissionId == id).Include(x => x.Criteria_Reviews).ToList();
            return Ok(reviews);
        }

        // GET: api/Review
        [HttpGet]
        [Route("criteria")]
        public async Task<IActionResult> GetCriteria()
        {
            var criterias = _context.Criterias.ToList();
            return Ok(criterias);
        }

        [HttpGet]
        [Route("getreviewsforuser")]
        public async Task<IActionResult> GetReviewsForUser(int id) 
        {
            if (_context.Users.Where(x => x.Id == id).Count() == 0)
            {
                return BadRequest(id);
            }
            var reviews = _context.Reviews.Where(x => x.SubmissionId == id).Include(x => x.Criteria_Reviews).ToList();
            return Ok(reviews);
        }

        [HttpPost]
        [Route("SubmitReview")]
        public async Task<IActionResult> SubmitReview(Criteria_Review[] criteria_reviews)
        {
            _context.Criteria_Reviews.AddRange(criteria_reviews);

            var review = new Review
            {
                Id = _context.Reviews.Count() + 1,
                CreatorId = 1,
                Creator = _context.Users.Where(x => x.Id == 1).FirstOrDefault(),
                Criteria_Reviews = criteria_reviews,
            };
            _context.SaveChanges();
            return Ok(review);
        }



        // POST: api/Review
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Review/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
