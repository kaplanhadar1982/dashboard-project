using Ta9.Domain;
using System.Linq;
using Ta9.Application.Interfaces;


namespace Ta9.Application.UseCases
{
    public class AddServer:IAddServer
    {
        private readonly IDashboardAppDbContext _db;
        public AddServer(IDashboardAppDbContext db)
        {
            _db = db;
        }

        public IQueryable<Server> Execute(Server model)
        {
            _db.Servers.Add(model);
            _db.Save();
            return _db.Servers;
        }
    }
}