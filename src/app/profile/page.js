'use client'

import CustomerProfile from "../_components/CustomerProfile";

const customer = {
  picture: '/images/1631461882423.jpg',
  name: 'John Doe',
  contactNumber: '123-456-7890',
};

const vehicles = [
  {
    name: 'Toyota Camry',
    registrationNumber: 'ABC123',
    modelYear: 2019,
    kilometerRun: 15000,
  },
  {
    name: 'Honda Accord',
    registrationNumber: 'XYZ789',
    modelYear: 2020,
    kilometerRun: 10000,
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <CustomerProfile customer={customer} vehicles={vehicles} />
    </div>
  );
}