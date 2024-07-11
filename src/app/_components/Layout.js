// components/Layout.js

import React, { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('your_api_endpoint');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Render common layout elements */}
      {/* Pass data as props to children */}
      {React.cloneElement(children, { data })}
    </div>
  );
}
