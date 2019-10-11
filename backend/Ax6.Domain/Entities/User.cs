using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Ax6.Domain
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [DataType(DataType.Password)]
        public string Password { get; set; }
        public virtual ICollection<Review> Reviews { get; set; } = new HashSet<Review>();
        public virtual ICollection<Submission> Submissions { get; set; } = new HashSet<Submission>();
    }
}
