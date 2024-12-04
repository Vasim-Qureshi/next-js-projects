"use client"
import { useState, useEffect } from 'react';

export default function YourComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const jsonData = await response.json();
      setData(jsonData.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {data.length > 0 ? (
        data.map((item,index)=> (
          <div key={index}>
            <h4>{item.title}</h4>
            {/* Render your data here */}
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}