using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Ax6.Domain
{
    public class Criteria_Review
    {
        public int Id { get; set; }
        public virtual Criteria Criteria { get; set; }
        public int? CriteriaId { get; set; }
        public virtual Review Review { get; set; }
        public int? ReviewId { get; set; }
        [Range(0,100)]
        public int Rating { get; set; }
    }
}
