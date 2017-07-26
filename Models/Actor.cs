using System;

namespace film.Models
{
    public class Actor
    {
        public int ActorId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }

        public Movie Movie { get; set; }

        
    }
}