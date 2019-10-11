using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Ax6.Domain
{
    public class Review
    {
        public int Id { get; set; }
        [Required]
        public virtual User Creator { get; set; }
        public int? CreatorId { get; set; }
        [ForeignKey("SubmissionId")]
        public virtual Submission Submission { get; set; }
        public int? SubmissionId { get; set; }
        public virtual ICollection<Criteria_Review> Criteria_Reviews { get; set; } = new HashSet<Criteria_Review>();

    }
}
