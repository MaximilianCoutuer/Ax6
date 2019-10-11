using System;
using System.Collections.Generic;
using System.Text;

namespace Ax6.Domain
{
    
    public class Criteria
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Criteria_Review> Criteria_Reviews { get; set; } = new HashSet<Criteria_Review>();
    }
}
