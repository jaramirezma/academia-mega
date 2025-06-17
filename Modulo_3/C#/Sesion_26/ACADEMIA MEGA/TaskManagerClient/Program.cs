using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using TaskManagerClient.Services;
using TaskManagerClient;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<App>("#app");

builder.Services.AddSingleton(sp =>
{
    var http = new HttpClient();
    return http;
});

// Inyección de dependencias
builder.Services.AddScoped<ITaskReader, TaskService>();
builder.Services.AddScoped<ITaskWriter, TaskService>();

await builder.Build().RunAsync();
