AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

var hostWithHeroku = true; // Set true if using heorku hosting

var builder = WebApplication.CreateBuilder(args).UseSerilog();

// Add services to the container.
builder.Services.AddServices(builder.Configuration);

// Configure the HTTP request pipeline.
var app = builder.Build();
app.UsePipelineBuilder(builder.Configuration);
app.Run();
