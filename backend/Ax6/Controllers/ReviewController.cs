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
        [Route("getreviewsforsubmission/{id}")]
        public async Task<IActionResult> GetReviewsForSubmission(int id)
        {
            var reviews = _context.Criteria_Reviews.Include(cr => cr.Criteria).Include(cr => cr.Review).Where(cr => cr.Review.SubmissionId == id)
                .Select(cr => new { 
                    Criteria = new
                    {
                        cr.Criteria.Id,
                        cr.Criteria.Name,
                        cr.Criteria.Description,
                    },
                    Review = new
                    {
                        cr.Review.Id
                    },
                    cr.Id,
                    cr.Rating,
                    cr.Comment
                }).ToList();
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
        [Route("submitreview/{submissionId}")]
        public async Task<IActionResult> SubmitReview(int submissionId, ICollection<Criteria_Review> criteria_reviews)
        {
            criteria_reviews = criteria_reviews.Where(cr => cr.Comment.Length > 0).ToList();
            
            var review = new Review
            {
                CreatorId = 1,
                SubmissionId = submissionId
            };

            foreach (var cr in criteria_reviews)
            {
                cr.Criteria = null;
                cr.Review = review;
                await _context.Criteria_Reviews.AddAsync(cr);
            }

            await _context.SaveChangesAsync();
            return Ok(new { result = true });
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
