using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace film.Models
{
    public class Movie
    {
        public int MovieId { get; set; }
        public string Name { get; set; }
        [DataType(DataType.DateTime)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime ReleaseDate { get; set; }
        public Genre Genre { get; set; }
        public List<Actor> Actors { get; set; }

        public Movie(int movieId, string name, DateTime releaseDate, Genre genre, List<Actor> actors)
        {
            MovieId = movieId;
            Name = name;
            ReleaseDate = releaseDate;
            Genre = genre;
            Actors = actors;
        }

        public Movie()
        {
            
        }
    }



    public enum Genre
    {
        drama,
        komedija,
        veiksmo,
    }
}
////Filmo aprašo įvedimas.Įvedami laukai -
//pavadinimas, išleidimo data, žanras
//    (drama, komedija, veiksmo), bei aktoriai;