using Core.Entities.Identity;


namespace Core.Interface
{
    public interface ITokenService
    {
        String CreateToken(AppUser user);
    }
}
