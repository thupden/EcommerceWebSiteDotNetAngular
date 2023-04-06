using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string RetrieveEmailFromprincipal(this ClaimsPrincipal user)
        {
            return user.FindFirst(ClaimTypes.Email).ToString();
        }
    }
}
