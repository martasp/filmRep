using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using film.Models;
using Microsoft.AspNetCore.Mvc;

namespace film.Controllers
{
    [Route("api/[controller]")]
    public class MovieController : Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody] Movie movie)
        {
            Console.WriteLine(movie.ToString());
            return Json(movie);
        }
        public IActionResult get()
        {
            var lol = "sudas";
            return Json(lol);
        }
    }
}
