using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ax6.Domain;
using Ax6.Domain.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ax6.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class UserController : Controller
    {
        private Ax6Context _context;

        public UserController(Ax6Context context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Login(string username, string password)
        {
            // Check if user exists

                var user = new User { Username = username, Password = password };
                await _context.Users.AddAsync(user);
            return Ok(user);
        }

        [HttpGet]
        [Route("GetUserById")]
        public IActionResult GetUserById(int id)
        {
            //using (var _context = new Ax6Context()) {
                var user = _context.Users.Where(x => x.Id == id).FirstOrDefault();
                return Ok(user);
            //}
        }
    }
}
