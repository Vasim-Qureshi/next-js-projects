'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main >
      <h1>Food Delivery App Home Page </h1>
     <Link href="/restaurant/dashboard">Dashboard</Link>
     <br/>
     <br/>
     <button onClick={() => router.push("/restaurant")}>Login/Signup</button>
    
    </main>
  );
}
