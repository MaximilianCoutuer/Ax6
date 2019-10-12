using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Ax6.Domain.Context
{
    public class Ax6Context : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Submission> Submissions { get; set; }
        public DbSet<Criteria> Criterias { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Criteria_Review> Criteria_Reviews { get; set; }

        public Ax6Context()
        {
            if (Users.Count() == 0)
            {
                Users.Add(new User { Id = 1, Username = "admin", Password = "admin" });
                SaveChanges();
            }
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=Ax6DB;Trusted_Connection=True;");
            }
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<CourseInstructor>()
            //    .HasMany(x => x.Course).WithMany(x => x.CourseInstructors)
            //    .OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<User>()
            .HasMany<Submission>(t => t.Submissions)
            .WithOne(t => t.Creator).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<User>()
            .HasMany<Review>(t => t.Reviews)
            .WithOne(t => t.Creator).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Criteria>()
            .HasMany<Criteria_Review>(t => t.Criteria_Reviews)
            .WithOne(t => t.Criteria).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Review>()
            .HasMany<Criteria_Review>(t => t.Criteria_Reviews)
            .WithOne(t => t.Review).OnDelete(DeleteBehavior.Restrict);
            //.WithOne<Review>(t => t.Review)
            //.WillCascadeOnDelete(false);
        }
    }
}
