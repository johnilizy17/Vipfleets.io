import Navbar from '../components/Header/Navbar'
import Link from 'next/link'
import { Button, Card } from '@mui/material'
import map from '../asset/map.png'
import airport from '../asset/airport2.jpg'
import Image from 'next/image'
import { AiOutlineDownload, AiOutlineArrowRight } from 'react-icons/ai';
import News from '../components/home/News'

export default function About() {
    return (
        <>
            <div className="font-serif">
                <Navbar />
                <Image src={airport} alt="the teams image" />
                <div className=" text-white-color lg:ml-20 sm:ml-5  relative lg:bottom-32 sm:bottom-32">
                    <div className="font-semibold text-5xl">
                    Airport pick and drop:
              </div>
              </div>
                <div className=" lg:m-20 lg:mt-20 relative lg:bottom-20 sm:bottom-20 lg:mb-10 sm:m-5 sm:mb-10">
                    <div className="basis-2/5">
                        <div className="mt-5">
                        Don’t be left stranded at the airport. To schedule a ride to or from the airport is easy, convenient and reliable.Don’t be left stranded at the airport. To schedule a ride to or from the airport is easy, convenient and reliable.
                   </div>
                   <div className=" mt-2">
                        Send in your hire request either via email (<a href="mailto:joinus@vipfleets.io" className="text-brand-color">enquire@vipfleets.io</a>) or on our airport PICK/DROP dedicated WhatsApp numbers. 
                </div>        
                        <div className="mt-5">
                            <span className="text-brand-color"> VIP FLEETS </span> is an indigenous car rental company operating in <span className="text-brand-color"> Lagos</span>, <span className="text-brand-color"> Abuja</span> and <span className="text-brand-color"> Port Harcourt</span>. Our services are designed to ease the stress of self-drive, by providing our clients with an experience of chauffeur driven vehicles in the safest, comfortable and <span className="text-brand-color"> VIP style</span> - these are standard attributes of our carefully selected fleet.
                   </div>
                       
                       </div>
                    <div className="mt-5 flex  items-center">
                        <div className="flex w-full justify-between">
                            <Card className="bg-snow flex flex-col w-2/6 p-5">
                                <div style={{flex:1}}>
                                    {"Do you want special offer from VIP FLEETS?"}
                                </div>
                                <Link passHref={true} href="/special_offer">
                                <div className="flex text-xs italic mt-5 text-brand-color cursor-pointer">
                                  <div style={{flex:0.7}}>Click here </div> <AiOutlineArrowRight/>
                                </div>
                                </Link>
                            </Card>
                            <Card className="bg-snow flex flex-col w-2/5 p-5">
                                <div style={{flex:1}}>
                                   {" Do you want to partner with VIP FLEETS?"}
                                </div>
                                <Link passHref={true} href="/partner">
                                <div className="flex text-xs italic mt-10 text-brand-color cursor-pointer">
                                   <div style={{flex:0.7}}>Click here </div> <AiOutlineArrowRight/>
                                </div>
                                </Link>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <News />
        </>
    )
}