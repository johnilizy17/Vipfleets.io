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
            <div className=" sm:hidden flex lg:text-3xl flex-col items-center justify-center font-semibold text-brand-color mb-5">
                Most popular cars hired in VIP FLEETS are listed below
                <div className="mt-5 font-normal  mb-5 text-2xl text-black">
                      Not seeing what you like?<br/>
                      Visit our instagram page <a href="">(VIP FLEETS)</a> or call any of our hire lines and speak to a member of our team members
                    </div>
                   
                    </div>
            <div className="sm:flex sm:flex-col sm:z-10 sm:justify-center sm:items-center lg:grid lg:grid-cols-3 sm:pt-10 sm:bg-snow lg:grap-3 lg:pl-20 lg:pr-20">
                <div className=" lg:hidden  pl-5 pr-5 flex justify-center font-semibold text-brand-color mb-2">
                    Most popular cars hired in VIP FLEETS  are listed below:
                    </div>
                    <div className="lg:hidden ml-5 mb-5 mr-5">
                      Not seeing what you like?<br/>
                      Visit our instagram page <a href="https://www.instagram.com/vipfleets" className="text-brand-color">(VIP FLEETS)</a> or call any of our hire lines and speak to a member of our team members
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