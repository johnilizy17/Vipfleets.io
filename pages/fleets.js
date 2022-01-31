import Navbar from '../components/Header/Navbar';
import { Card } from '@mui/material';
import Image from 'next/image';
import { GoPrimitiveDot } from 'react-icons/go';
import News from '../components/home/News'
import ford from '../asset/cars/ford.jpg'
import land from '../asset/cars/land.jpg'
import pardo from '../asset/cars/pardo.jpg'
import Mercedes from '../asset/cars/Mercedes-Benz_Sprinter.jpg'
import wagon from '../asset/cars/g-wagon.jpg';
import Range from '../asset/cars/Range-Rover.webp';
import Royce from '../asset/cars/Roll-Royce.jpg';
import GLE350 from '../asset/cars/mercedes-benz-GLE350.jpg';
import Jaguar from '../asset/cars/Jaguar.jpg';
import LX570 from "../asset/cars/Lexus-LX570.jpg";
import coaster from "../asset/cars/coaster.jpg";
import carmary from "../asset/cars/carmary.jpg";
import Hiace from "../asset/cars/Toyota-Hiace-Bus.jpg";
import toyotasienna from "../asset/cars/toyota-sienna.webp";

export default function Fleets() {

    const LoadImage = [
        {
            "image": pardo,
            "name": "Pardo"
        },
        {
            "image": land,
            "name": "Toyota Landcruiser"
        },
        {
            "image":Mercedes,
            "name": "Mercedes Benz Sprinter Bus"
        },
        {
            "image":wagon,
            "name": "G-Wagon"
        },
        {
            "image":Range,
            "name": "Range-Rover"
        },
        {
            "image":Royce,
            "name": "Roll-Royce"
        },
        {
            "image":GLE350,
            "name": "Mercedes Benz GLE350"
        },
        
        {
            "image":Jaguar,
            "name": "Vintage Jaguar"
        },
        {
            "image":LX570,
            "name": "Lexus LX570"
        },
        {
            "image":coaster,
            "name": "Coaster Bus"
        },
        {
            "image":carmary,
            "name": "Carmary"
        },
        
        {
            "image":Hiace,
            "name": "Toyota Hiace Bus"
        },
        {
            "image":toyotasienna,
            "name": "Toyota Sienna "
        },
        {
            "image": ford,
            "name": "Ford Explorer"
        },
    ]

    return (
        <div className="font-serif lg:bg-snow pb-5 h-screen">
            <Navbar />
            <div className=" sm:hidden flex justify-center font-semibold text-brand-color mb-5">
            Most popular cars in hired in VIP FLEETS
                    </div>
            <div className="sm:flex sm:flex-col sm:z-10 sm:justify-center sm:items-center lg:grid lg:grid-cols-3 sm:pt-10 sm:bg-snow lg:grap-3 lg:pl-20 lg:pr-20">
            <div className=" lg:hidden flex justify-center font-semibold text-brand-color mb-5">
            Most popular cars hired in VIP FLEETS
                    </div>
               
                {LoadImage.map((data) => {
                    return <Card key={data} style={{ width: 330, display: "flex", flexDirection: "column", cursor: "pointer", justifyContent: "center", alignItems: "center", marginBottom: 20, height: 330 }}>
                        <Image src={data.image} alt="images" height={300} width={400} />
                        <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                            {data.name}
             <GoPrimitiveDot />
                        </div>
                    </Card>
                })}

            </div>
            <News />
        </div>
    )
}