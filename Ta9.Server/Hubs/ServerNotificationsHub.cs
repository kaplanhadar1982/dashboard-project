using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using System;
using Microsoft.AspNetCore.Http;

namespace Ta9.Server.Hubs
{
    public class ServerNotificationsHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public override async Task OnConnectedAsync()
        {
            var httpContext = Context.GetHttpContext();
            var s= Context.User.Identity;
            await Clients.All.SendAsync("ReceiveMessage", "",httpContext.Request.Headers["User-Agent"] );
            //await Groups.AddToGroupAsync(Context.ConnectionId, "SignalR Users");
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await Clients.All.SendAsync("ReceiveMessage", "","D___" + Context.ConnectionId.ToString());
            //await Groups.RemoveFromGroupAsync(Context.ConnectionId, "SignalR Users");
            await base.OnDisconnectedAsync(exception);
        }
    }
}