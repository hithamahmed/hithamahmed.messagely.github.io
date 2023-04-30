using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace InstagramMessagesApp.Hubs
{
    public class InstagramHub : Hub
    {
        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}
