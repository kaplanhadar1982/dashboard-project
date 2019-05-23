using Ta9.Domain;
using System.Linq;


namespace Ta9.Application.UseCases
{
    public interface IUpdateServer
    {
         IQueryable<Server> Execute(string ServerId);
    }
}