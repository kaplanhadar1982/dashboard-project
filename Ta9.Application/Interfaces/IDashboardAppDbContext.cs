using Microsoft.EntityFrameworkCore;
using Ta9.Domain;
using System.Threading;
using System.Threading.Tasks;

namespace Ta9.Application.Interfaces
{
    public interface IDashboardAppDbContext
    {
        DbSet<Server> Servers { get; set; }

        void Save();
    }
}