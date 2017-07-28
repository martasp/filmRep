using System;
using Newtonsoft.Json;

namespace film.Models
{
    public class Actor
    {
        public int ActorId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        [JsonIgnore]
        public Movie Movie { get; set; }

        
    }
}