using System.ComponentModel.DataAnnotations;

namespace Bug_Tracker.Models
{
    public class User
    {
        public int Id { get; set; }
        
        [StringLength(20)]
        public string Name { get; set; } = string.Empty;
    }
}
