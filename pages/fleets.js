import Navbar from '../components/Header/Navbar';
import { Card } from '@mui/material';
import Image from 'next/image';
import image1 from '../asset/speed.jpg';
import customer from '../asset/customer.jpg';
import { GoPrimitiveDot } from 'react-icons/go';
import News from '../components/home/News'
export default function Fleets() {

    const LoadImage = [image1, image1, customer, image1, image1, customer, image1, image1, customer, image1, image1, customer]

    return (
        <div className="font-serif lg:bg-snow pb-5 h-screen">
            <Navbar />
            <div className="sm:flex sm:flex-col sm:z-10 sm:justify-center sm:items-center lg:grid lg:grid-cols-3 sm:pt-10 sm:bg-snow lg:grap-3 lg:pl-20 lg:pr-20">
                {LoadImage.map((data) =>{ 
                  return  <Card key={data} style={{ width: 330, display: "flex", flexDirection: "column", cursor: "pointer", justifyContent: "center", alignItems: "center", marginBottom: 20, height: 330 }}>
                        <Image src={data} alt="images" height={300} width={400} />
                        <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
                            Image
             <GoPrimitiveDot />
                        </div>
                    </Card>})}

            </div>
            <News />
        </div>
    )
}