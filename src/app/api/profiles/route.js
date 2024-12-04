// pages/api/profiles 

import { useParams } from "next/navigation";

// Sample data
const profiles = [
    { name: 'John', age: 30, occupation: 'Engineer', address: '123 Main St' },
    { name: 'Alice', age: 25, occupation: 'Doctor', address: '456 Elm St' }
  ];
  
  export default function handler(req, res,params) {
    const params = useParams()
    let profile  = req.json()
    if (profile){
      res.status(200).json(profiles);
    }
    
  }