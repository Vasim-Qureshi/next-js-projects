import Link from 'next/link';

const AmazonHeader = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="flex items-center p-4">
        {/* Logo */}
        <div className="mr-4">
          <Link href="/">
            <img src="/amazon-logo.png" alt="Amazon" className="h-8" />
          </Link>
        </div>
        
        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-md text-black"
          />
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/account">
          Account
          </Link>
          <Link href="/orders">
          Orders
          </Link>
          <Link href="/cart">
          Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AmazonHeader;