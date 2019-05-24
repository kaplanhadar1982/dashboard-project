using System.Collections.Concurrent;
using System.Collections.Generic;
using Ta9.Server.Model.Interfaces;

namespace Ta9.Server.Model
{
    public class AppClientsManager:IAppClientsManager
    {
        private ConcurrentDictionary<string,AppClient> _clients;

        public AppClientsManager(){
            _clients = new ConcurrentDictionary<string,AppClient>();
        }

        public void Add(string connectionId, AppClient client)
        {
            _clients.AddOrUpdate(connectionId,client,(k,v) => client);
        }

        public void UpdateOnlineStatue(string connectionId,bool isOnline)
        {
            if(_clients.TryGetValue(connectionId, out AppClient client))
                _clients.AddOrUpdate(connectionId,client,(k,oldVal) => {
                    var newVal = oldVal;
                    newVal.IsOnline = isOnline;
                    return newVal;
            });
        }

        public IEnumerable<AppClient> GetClients()
        {
            foreach (var item in _clients)
            {
                yield return item.Value;
            }
        }
    }
}