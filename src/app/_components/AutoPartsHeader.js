import React from 'react';

const Header = () => {
  const categories = [
    'Engine Parts',
    'Transmission Parts',
    'Clutch Parts',
    'Brake Parts',
    'Wheel Parts',
    'Suspension Parts',
    'Steering Parts',
    'Service Parts',
    'Chassis Parts',
    'Exterior Body Parts',
    'Interior Body Parts',
    'Electric Parts',
    'Other Accessories',
  ];

  return (
    <header className="sticky top-0 left-0 w-full bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          {/* First Row */}
          <div className="flex items-center space-x-4">
            <img src="/images/logo-autopart.PNG" alt="Company Logo" className="h-10" />
            <input
              type="text"
              placeholder="Search..."
              className="w-40 sm:w-80 md:w-300 px-2 py-2 rounded bg-white"
            />
          </div>
          <div className="flex items-center space-x-4">
            <img src="/images/cart.PNG" alt="Cart" className="h-8" />
            <img src="/profile.jpg" alt="Profile" className="h-8 w-8 rounded-full" />
          </div>
        </div>
        <div className="overflow-x-auto whitespace-nowrap bg-blue-700 p-2 rounded-lg shadow-inner">
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <a
                href={`#${category.replace(/ /g, '-').toLowerCase()}`}
                key={index}
                className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold whitespace-nowrap"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;