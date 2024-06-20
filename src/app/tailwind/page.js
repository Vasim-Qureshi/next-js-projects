"use client"

import AmazonHeader from "../_components/AmazonHeader"
import Carousel_2 from "../_components/carousel_two"
import CounterButtons from "../_components/count_buttons"
import ScrollComponent from "../_components/scrollevents"
import SideMenu from "../_components/sidemenubar"
import VideoPlayer from "../_components/videoplayer"

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpTsUmjw250n1iEnxLWRm2vGPZXujd64bPg&usqp=CAU",
    "https://philstarlife.s3.ap-east-1.amazonaws.com/photos/3/Samsung/Galaxy%20Z%20Fold%202/photo-5.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wjjo00r8E2eT8VjwN3I1zIpSdqSqAyZIJQ&usqp=CAU",
    "https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nRETVSUz0i0X6kwnZtzR4Z9e3jawbRz5di59efTGpsXQ-jROXJOIKJ2h&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwoZD3dVsEzYKgy-pkTYae_Dd3-6gA5kzINXHYQCM7xpJKd5gg7BWXTgP&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovIF0vFf3xI8Onvo_8G8G45bw46fnsyWyTw&usqp=CAU"
]

export default function tailwind (){
    return (
        <>
        <AmazonHeader/>
        <p className="bg-black text-white font-bold">className = "bg-red-100 text-2x font-bold border border-blue-400" </p>
        <div className="bg-red-100 text-2x font-bold border border-blue-400 ">
            <button className="text-blue-500">Header Bar</button>
        </div>

        <p className="bg-black text-white font-bold">className = "focus-within:text-red-600" </p>

        <form>
            <div className="text-gray-400 focus-within:text-red-600 focus-within:underline">
                Enter your name:
                <input className="ml-2 px-4 py-2 border rounded focus-within:text-green-800" type="text" placeholder="Name"/>
            </div>
        </form>
        <p className="bg-black text-white font-bold">className = "list-none" </p>
        <p className="bg-black text-white font-bold">className = "list-disc" </p>
        <p className="bg-black text-white font-bold">className = "list-decimal" </p>

        <div className="text-blue-800">
            <ul className="list-none list-inside m-2">
                <li>None</li>
                <li>None</li>
            </ul>
            <ul className="list-disc list-inside m-2">
                <li>Disc</li>
                <li>Disc</li>
            </ul>
            <ul className="list-decimal list-inside m-2">
              <li>Decimal</li>
              <li>Decimal</li>
            </ul>
        </div>
        <div className="bg-black text-white font-bold text-center"> 
           <p>div className="inline-block group p-6 border-2 cursor-pointer hover:bg-gray-500 hover:border-blue-100" </p>
           <p> className="group-hover:text-gray-400"</p> <p className="text-red-500"> John Smith</p>
           <p>className="group-hover:text-blue-400"</p> <p className="text-red-500"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptatibus.</p>
        </div>

        <div className="inline-block group p-6 border-2 cursor-pointer hover:bg-gray-500 hover:border-blue-100">
            <p className="group-hover:text-gray-400">John Smith</p>
            <p className="group-hover:text-blue-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptatibus.</p>
        </div>

        <button className="duration-300 transform hover:scale-125 transition ease-linear bg-teal-400 px-6 py-2 m-4 inline">duration</button>
        <button className="delay-1000 duration-100 transform hover:scale-125 transition ease-linear bg-teal-400 px-6 py-2 m-4 inline">delay</button>
        <CounterButtons/>
        <Carousel_2 images={images}/>
        <VideoPlayer/>
        <SideMenu/>
        <ScrollComponent/>
    </>
    )
}