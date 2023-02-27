using System.Linq.Expressions;

namespace Core.Interface.Specification
{
    public interface ISpecification<T>
    {
        Expression<Func<T, bool>> Criteria{ get; }
        List<Expression<Func<T, Object>>> Includes { get; }
    }
}
