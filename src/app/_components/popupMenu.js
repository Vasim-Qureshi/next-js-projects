// components/PopupMenu.js
import { useState } from 'react';

const PopupMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button onClick={toggleMenu} className="bg-blue-500 text-white px-4 py-2 rounded">
        Menu
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg">
          <ul className="list-none p-0 m-0">
            <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Home</a></li>
            <li className="px-4 py-2 hover:bg-gray-100"><a href="#">About</a></li>
            <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Services</a></li>
            <li className="px-4 py-2 hover:bg-gray-100"><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;