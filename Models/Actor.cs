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

        public Actor(int actorId, string name, string surname, Movie movie)
        {
            ActorId = actorId;
            Name = name;
            Surname = surname;
            Movie = movie;
        }

        public Actor()
        {
            
        }
    }
}