using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace film.Models
{
    public class Movie
    {
        public int MovieId { get; set; }
        public string Name { get; set; }
        public DateTime ReleaseDate { get; set; }
        public Genre Genre { get; set; }
        public List<Actor> Actors { get; set; }

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