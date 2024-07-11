// pages/post/[slug]/page.js
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Post() {
  const [data,setData] = useState([]);
  const router = useRouter();
  
  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  const {slug} = router.query.name;
  setData(slug);
  
  return (
    <div>
      <h1>Post: {data}</h1>
      {/* Fetch and display post content based on slug */}
    </div>
  );
}