using System;
using Ta9.Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Ta9.Domain;

namespace Ta9.Persistence
{
    public class DashboardAppDbContext : DbContext,IDashboardAppDbContext
    {
        public DashboardAppDbContext(DbContextOptions<DashboardAppDbContext> options)
            : base(options)
        {
        }
        public DbSet<Server> Servers { get; set; }

        public void Save()
        {
            this.SaveChanges();
        }
    }
}