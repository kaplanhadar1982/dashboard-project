using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Ta9.Server.Hubs;

namespace Ta9.Server
{
    public class Startup
    {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=39894
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSignalR()
            .AddStackExchangeRedis("dashboard-app.redis.cache.windows.net:6380,password=7VzUNjxIjv7GBj02wnpMVayjXProie+kx7ZjzeBq8uQ=,ssl=True,abortConnect=False");
            
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins,
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:4200")
                                .AllowAnyHeader()
                                .AllowAnyMethod()
                                .AllowCredentials();
                    });
            });
            services.AddHttpContextAccessor();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseCors(MyAllowSpecificOrigins);
            app.UseSignalR(routes => {
                routes.MapHub<ServerNotificationsHub>("/hub");
            });
        }
    }
}
