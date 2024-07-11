'use client'
import Link from "next/link";
export default function StudentList () {
    return ( 
        <ul>
            <li>
                <Link href="/studentlist/rajiv">Rajiv</Link>
            </li>

            <li>
                <Link href="/studentlist/rahul">Rahul</Link>
            </li>

            <li>
                <Link href="/studentlist/ajaz">Ajaz</Link>
            </li>
            <li>
                <Link href="/restaurant/drop-down-list"> Drop-down List </Link>
            </li>
        </ul>
        
        
    )
}