'use client'
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "@/app/_components/restaurantSignUp";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import Footer from "@/app/_components/Footer";
import './style.css'

const Restaurant = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
        <div className="container">
            <RestaurantHeader />
            <h1>Restaurant Login/Signup Page</h1>
            {
                login ? <RestaurantLogin /> : <RestaurantSignUp />
            }

            <div>
                <button className="button-link" onClick={() => setLogin(!login)}>
                    {login ? "Do not have account? SignUp" : "Already have Account? Login"}
                </button>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Restaurant;