"use client"
import Footer from "@/app/_components/Footer";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function Student (params) {
    params = useParams();
    //pathName = usePathname();
    return (
    <>
         {
            params.student == "rajiv" ?
            <div>
               <RestaurantHeader/>
               <h1>Hello Rajiv</h1>
               <Footer/>
            </div>
            : <h2>hello students</h2>
         }
        <Link href="/studentlist">Student List</Link>
        <h1>From Student List</h1>
        <h3>{params.student}</h3>
    </>
    )
}