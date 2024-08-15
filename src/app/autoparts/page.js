"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Header from '../_components/AutoPartsHeader';
import SeedForm from '../_components/autopartsSeed';
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

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('api/parts/autoparts');
        setProducts(res.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SeedForm/>
      <main className="pt-20">
        <div className="container mx-auto flex flex-col items-center justify-center flex-1">
          {categories.map((category, index) => (
            <section id={category.replace(/ /g, '-').toLowerCase()} key={index} className="w-full mb-8">
              <h2 className="text-2xl font-bold mb-4">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-blue-600 font-bold">${product.price}</p>
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <footer className="w-full bg-blue-600 p-4 text-center text-white">
        © 2024 Auto Part Store
      </footer>
    </div>
  );
};

export default Home;