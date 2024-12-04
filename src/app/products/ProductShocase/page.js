// pages/index.js
"use client"
import { useState } from 'react';
import ProductShowcase from '@/app/_components/ProductShocase';
import Form from '@/app/_components/ProductForm';
import productsData from '@/app/lib/productsjson';

export default function Home() {
  const [products, setProducts] = useState(productsData);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: prevProducts.length + 1, ...newProduct }
    ]);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Product Showcase</h1>
      <Form onAddProduct={addProduct} />
      <ProductShowcase products={products} />
    </div>
  );
}