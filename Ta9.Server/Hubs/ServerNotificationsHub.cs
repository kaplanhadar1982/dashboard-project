using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Ta9.Server.Hubs
{
    public class ServerNotificationsHub : Hub
    {
        public  Task SendMessage(string user, string message)
        {
            return Clients.All.SendAsync("ReceiveServerNotification", message);
        }
    }
}