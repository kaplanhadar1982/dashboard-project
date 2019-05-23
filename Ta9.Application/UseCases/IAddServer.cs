using Ta9.Domain;
using System.Linq;


namespace Ta9.Application.UseCases
{
    public interface IAddServer
    {
         IQueryable<Server> Execute(Server model);
    }
}