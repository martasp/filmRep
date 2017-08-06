using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using film.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var lf = new LoggerFactory();
            lf.AddProvider(new DbLogger());
            optionsBuilder.UseLoggerFactory(lf);
        }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Actor> Actors { get; set; }

    }
}

