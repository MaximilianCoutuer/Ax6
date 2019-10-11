using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Ax6.Domain
{
    public class Submission
    {
        public int Id { get; set; }
        [Required]
        [ForeignKey("CreatorId")]
        public virtual User Creator { get; set; }
        public int? CreatorId { get; set; }
        [Required]
        public Guid FolderGuid { get; set; }
        public DateTime Timestamp { get; set; }
        [Required]
        [MinLength(50, ErrorMessage = "Minimum lengte 50 karakters")]
        [DataType(DataType.MultilineText)]
        public string Description { get; set; }
        [Required]
        public string Title { get; set; }
    }
}
