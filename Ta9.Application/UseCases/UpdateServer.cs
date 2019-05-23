using Ta9.Domain;
using System.Linq;
using Ta9.Application.Interfaces;


namespace Ta9.Application.UseCases
{
    public class UpdateServer:IUpdateServer
    {
        private readonly IDashboardAppDbContext _db;
        public UpdateServer(IDashboardAppDbContext db)
        {
            _db = db;
        }

        public IQueryable<Server> Execute(string ServerId)
        {
            var server = _db.Servers
                .Single(p => p.Id == ServerId);
            server.IsOnline = false;
            _db.Save();
            return _db.Servers;
        }
    }
}