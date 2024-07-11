// app/product/[id]/page.js
import { useParams } from 'next/navigation';

export default async function ProductPage(context) {
  const { id } = context;

  // Fetch your data here based on the `id`
  const res = await fetch(`/api/parts`);
  const product = await res.json();

  return (
    <div>
      <h1>Product ID: {product.id}</h1>
      <p>{product.name}</p>
      {/* Add more product-specific content here */}
    </div>
  );
};