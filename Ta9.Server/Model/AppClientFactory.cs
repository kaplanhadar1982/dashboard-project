using Ta9.Server.Utilities.UserAgent;
using Ta9.Server.Model.Interfaces;
using Microsoft.AspNetCore.Http;

namespace Ta9.Server.Model
{
    public class AppClientFactory : IAppClientFactory
    {
        //public AppClient Create(string userAgentHeaders,string ip){
         public AppClient Create(HttpContext request){
            UserAgent userAgent = new UserAgent(request.Request.Headers["User-Agent"]);

            AppClient ac = new AppClient();
            ac.Browser = userAgent.Browser.Name;
            ac.Os = userAgent.OS.Name;
            ac.Ip = request.Connection.RemoteIpAddress.ToString();
            ac.IsOnline = true;

            return ac;
        }
    }
}