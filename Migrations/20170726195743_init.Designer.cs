﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using film.DB;
using film.Models;

namespace film.Migrations
{
    [DbContext(typeof(MovieContext))]
    [Migration("20170726195743_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("film.Models.Actor", b =>
                {
                    b.Property<int>("ActorId")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("MovieId");

                    b.Property<string>("Name");

                    b.Property<string>("Surname");

                    b.HasKey("ActorId");

                    b.HasIndex("MovieId");

                    b.ToTable("Actor");
                });

            modelBuilder.Entity("film.Models.Movie", b =>
                {
                    b.Property<int>("MovieId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Genre");

                    b.Property<string>("Name");

                    b.Property<DateTime>("ReleaseDate");

                    b.HasKey("MovieId");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("film.Models.Actor", b =>
                {
                    b.HasOne("film.Models.Movie", "Movie")
                        .WithMany("Actors")
                        .HasForeignKey("MovieId");
                });
        }
    }
}
