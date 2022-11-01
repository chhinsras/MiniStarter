using Microsoft.AspNetCore.SignalR;

namespace API.SignalR;

public class OnlineCountHub : Hub
{
    private static int Count = 0;
    public override Task OnConnectedAsync()
    {
        Count++;
        base.OnConnectedAsync();
        Clients.All.SendAsync("UpdateOnlineCount", Count);
        return Task.CompletedTask;
    }
    public override Task OnDisconnectedAsync(Exception? exception)
    {
        Count--;
        base.OnDisconnectedAsync(exception);
        Clients.All.SendAsync("UpdateOnlineCount", Count);
        return Task.CompletedTask;
    }
}