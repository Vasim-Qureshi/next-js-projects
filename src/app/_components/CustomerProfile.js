// components/CustomerProfile.js
import Image from 'next/image';

const CustomerProfile = ({ customer, vehicles }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <Image
          src={customer.picture}
          alt="Customer Picture"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{customer.name}</h2>
          <p className="text-gray-600">{customer.contactNumber}</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Vehicle Details</h3>
        <table className="min-w-full mt-2 bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b">Vehicle Name</th>
              <th className="px-4 py-2 border-b">Registration Number</th>
              <th className="px-4 py-2 border-b">Model Year</th>
              <th className="px-4 py-2 border-b">Kilometer Run</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border-b">{vehicle.name}</td>
                <td className="px-4 py-2 border-b">{vehicle.registrationNumber}</td>
                <td className="px-4 py-2 border-b">{vehicle.modelYear}</td>
                <td className="px-4 py-2 border-b">{vehicle.kilometerRun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerProfile;
