"use client"
import { useEffect,useState } from "react";

export default function ProductList() {
  const [product,setProduct] = useState([]);
  useEffect (()=>{
    data();
  },[]);

  const data = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const fetchdata = await data.json();
    console.log(fetchdata.products);
    setProduct(fetchdata.products)            

    };

    return (
        <div>
            <h1>Products List</h1>
         {
            product.map((item) => (
            <h3>{item.title}</h3>
            ))
          }            
        </div>
    )
}
