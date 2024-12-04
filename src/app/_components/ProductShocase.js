// components/ProductShowcase.js

import Image from 'next/image';

const ProductShowcase = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg shadow-md p-4 bg-white">
          <div className="relative w-full h-48 mb-4">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.details}</p>
          <p className="text-lg font-bold mb-2">{product.price}</p>
          <p className="text-sm text-red-500">{product.offer}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;