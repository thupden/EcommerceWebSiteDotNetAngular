﻿using Core.Entities;
using Core.Interface.Specification;

namespace Core.Interface
{
    public interface IGenericRepository<T> where T : BaseEntity 
    {
        Task<T> GetProductByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T> GetEntityWithSpec(ISpecification<T> spec);
        Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);
        Task<int> CountAsync(ISpecification<T> spec);

        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
