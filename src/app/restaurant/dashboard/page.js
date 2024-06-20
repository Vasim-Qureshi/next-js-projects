import RestaurantHeader from "@/app/_components/RestaurantHeader";
import './../style.css'
import Footer from "@/app/_components/Footer";
import Link from "next/link";
const Dashboard = () => {
    return (<div>
        <RestaurantHeader />
        <h1>
            Restaurant Dashboard
        </h1>
        <Link href="/studentlist">StudentList</Link> <br/><br/>
        <Link href="/products">Fatch ProductList</Link>
        <Footer/>
    </div>)
}

export default Dashboard;