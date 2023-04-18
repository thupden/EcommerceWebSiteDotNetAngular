﻿using Core.Entities;
using Core.Entities.OrderAggregate;

namespace Core.Interface
{
    public interface IPaymentService
    {
        Task<CustomerBasket> CreateOrUpdateCustomerIntent(string basketId);
        Task<Order> UpdateOrderPaymentSucceeded(string paymentIntentId);
        Task<Order> UpdateOrderPaymentFailed(string paymentIntentId);

    }
}
