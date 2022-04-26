using System.ComponentModel.DataAnnotations;

namespace Bug_Tracker.Models
{
    public class Project
    {
        public int Id { get; set; }

        [StringLength(40)]
        public string Name { get; set; } = String.Empty;

        [StringLength(400)]
        public string? Description { get; set; }

        public int UserId { get; set; }
        public User? User { get; set; } // navigation property, nullable because when don't use it in the queries, is needed for the migrations
    }
}
