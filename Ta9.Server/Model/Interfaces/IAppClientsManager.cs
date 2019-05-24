using System.Collections.Generic;

namespace Ta9.Server.Model.Interfaces
{
    public interface IAppClientsManager
    {
        void Add(string connectionId, AppClient client);
        void UpdateOnlineStatue(string connectionId,bool isOnline);
        IEnumerable<AppClient> GetClients();
    } 
}