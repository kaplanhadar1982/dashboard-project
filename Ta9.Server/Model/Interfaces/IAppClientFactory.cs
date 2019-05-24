using Ta9.Server.Model;
using Microsoft.AspNetCore.Http;

namespace Ta9.Server.Model.Interfaces
{
    public interface IAppClientFactory
    {
        AppClient Create(HttpContext request);
    } 
}