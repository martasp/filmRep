using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using film.DB;
using film.Migrations;
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
            return NotFound();
        }
        [HttpPut]
        public IActionResult Update([FromBody] Movie movie)
        {
            if (ModelState.IsValid)
            {
                _context.Movies.Update(movie);
                _context.SaveChanges();
                return Ok(movie);
            }
            return NotFound();
        }
        [HttpDelete]
        public IActionResult remove([FromBody]int id)
        {
            var m = _context.Movies.Include(Actor => Actor.Actors).FirstOrDefault(movie => movie.MovieId == id);
            if (m != null)
            {
                _context.Movies.Remove(m);
                m.Actors.ForEach(actor => _context.Actors.Remove(actor));
                _context.SaveChanges();
                return Ok(m);
            }
            return NotFound();

        }
    }
}
