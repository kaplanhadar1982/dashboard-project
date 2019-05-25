using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using System;
using System.Web;
using System.Collections.Specialized;
using Microsoft.AspNetCore.Http;
using Ta9.Server.Model;
using Ta9.Server.Model.Interfaces;


namespace Ta9.Server.Hubs
{
    public class ServerNotificationsHub : Hub
    {
        private readonly IAppClientFactory _clientFactory;
        private readonly IAppClientsManager _clientManager;

        public ServerNotificationsHub(IAppClientFactory clientFactory,IAppClientsManager clientManager):base()
        {
            _clientFactory = clientFactory;
            _clientManager = clientManager;
        }

        // public async Task SendMessage(string user, string message)
        // {
        //     await Clients.All.SendAsync("ReceiveMessage", user, message);
        // }

        public override async Task OnConnectedAsync()
        {
            var httpContext = Context.GetHttpContext();
            string clientid = HttpUtility.ParseQueryString(httpContext.Request.QueryString.Value)["clientid"]; 
            _clientManager.Add( clientid,_clientFactory.Create(httpContext));
            await Clients.All.SendAsync("ReceiveMessage", "", _clientManager.GetClients());
            await base.OnConnectedAsync();
        }

    

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var httpContext = Context.GetHttpContext();
            string clientid = HttpUtility.ParseQueryString(httpContext.Request.QueryString.Value)["clientid"]; 
            _clientManager.UpdateOnlineStatue( clientid,false);
            await Clients.All.SendAsync("ReceiveMessage", "", _clientManager.GetClients());
            await base.OnDisconnectedAsync(exception);
        }
    }
}