import Navbar from '../components/Header/Navbar';
import { Card } from '@mui/material';
import Image from 'next/image';
import { GoPrimitiveDot } from 'react-icons/go';
import News from '../components/home/News'
import ford from '../asset/cars/chrysler.jpg'
import haicebus from '../asset/cars/haicebus.jpg'
import hilux from '../asset/cars/hilux.jpg'
import hiluxbus from '../asset/cars/hiluxbus.jpg'
import wagon from '../asset/cars/g-wagon.jpg';
import Range from '../asset/cars/rover.jpg';
import pardo from '../asset/cars/prado.jpg';
import pardo2 from '../asset/cars/prado2.jpg';
import lx570 from '../asset/cars/lx570.jpg';
export default function Fleets() {

    const LoadImage = [
        {
            "image": pardo,
        },
        {
            "image": ford,
        },
        {
            "image": haicebus,
        },
        {
            "image": hiluxbus,
        },
        {
            "image": hilux,
        },
        {
            "image": Range,
        },
        {
            "image": lx570,
        }
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
                    return <Card key={data} style={{ width: 300, display: "flex", flexDirection: "column", cursor: "pointer", justifyContent: "center", alignItems: "center", marginBottom: 20, height: 330 }}>
                        <Image src={data.image} alt="images"  />
                    </Card>
                })}
            </div>
            <News />
        </div>
    )
}