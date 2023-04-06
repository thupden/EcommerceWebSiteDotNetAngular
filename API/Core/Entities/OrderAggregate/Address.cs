
namespace Core.Entities.OrderAggregate
{
    public class Address
    {
        //need to create parameter less constructor otherwise entityframework will throw an error while migrating
        public Address()
        {

        }

        public Address(string firstName, string lastName, string street, string city, string state, string pinCode)
        {
            FirstName = firstName;
            LastName = lastName;
            Street = street;
            City = city;
            State = state;
            PinCode = pinCode;
        }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PinCode { get; set; }
    }
}
