using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using film.Models;
using Microsoft.EntityFrameworkCore;

namespace film.DB
{
    public class MovieContext : DbContext
    {
        public MovieContext(DbContextOptions<MovieContext> options) : base(options)
        {
        }
        public MovieContext() 
        {
        }
        public DbSet<Movie> Movies { get; set; }
    }
}

