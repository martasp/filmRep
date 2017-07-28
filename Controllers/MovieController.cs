using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using film.DB;
using film.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace film.Controllers
{
    [Route("api/[controller]")]
    public class MovieController : Controller
    {
        private readonly MovieContext _context;

        public MovieController(MovieContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var movies = _context.Movies.Include(Actor => Actor.Actors).ToList();
            //List<MovieContract> mov = new List<MovieContract>();
            //movies.ForEach(i => mov.Add(
            //    new MovieContract(i.MovieId, i.Name, i.ReleaseDate, (Genre) i.Genre,i.Actors.)
            //));
            return Json(movies);
        }
        [HttpPost]
        public IActionResult Create([FromBody] Movie movie)
        {
            if (ModelState.IsValid)
            {
                _context.Movies.Add(movie);
                _context.SaveChanges();
                return Ok(movie);
            } 
            Console.WriteLine(movie.ToString());
            return NotFound();
        }
        public IActionResult Update()
        {
            return Ok();
        }
        [HttpDelete]
        public IActionResult remove([FromBody]int id)
        {
            var m = _context.Movies.Include(Actor => Actor.Actors).FirstOrDefault(movie => movie.MovieId == id);
            if (m!=null)
            {
                // var actors =  _context.Actors.Where(actor => actor.Movie.MovieId == id);
               // m.Actors= actors.
                _context.Movies.Remove(m);

                _context.SaveChanges();
                return Ok(m);
            }
            return NotFound();

        }
    }
}
