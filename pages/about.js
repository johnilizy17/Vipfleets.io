import Navbar from '../components/Header/Navbar'
import Link from 'next/link'
import { Button, Card } from '@mui/material'
import map from '../asset/map.png'
import Image from 'next/image'
import { AiOutlineDownload, AiOutlineArrowRight } from 'react-icons/ai';
import News from '../components/home/News'

export default function About() {
    return (
        <>
            <div className="font-serif">
                <Navbar />
                <div className=" lg:m-20 lg:mt-20 lg:mb-10 sm:m-5 sm:mb-10">
                    <div className="basis-2/5">
                        <div className="font-semibold text-4xl">
                            Welcome to VIP FLEETS.
                   </div>
                        <div className="mt-5">
                            Driving can be exhausting at times, especially in a mega city like Lagos.
                      <span className="text-brand-color">  VIP FLEETS </span> was launched exclusively for you.
                   </div>
                        <div className="mt-5">
                            <span className="text-brand-color"> VIP FLEETS </span> is an indigenous car rental company operating in <span className="text-brand-color"> Lagos</span>, <span className="text-brand-color"> Abuja</span> and <span className="text-brand-color"> Port Harcourt</span>. Our services are designed to ease the stress of self-drive, by providing our clients with an experience of chauffeur driven vehicles in the safest, comfortable and <span className="text-brand-color"> VIP style</span> - these are standard attributes of our carefully selected fleet.
                   </div>
                        <div className="mt-5">
                            We have a large fleet of vehicles for you to select from, why not press on  <Link passHref={true} href="/fleets">
                                <span className="text-brand-color font-bold cursor-pointer underline ml-2 mr-2 ">OUR FLEETS </span>
                            </Link> to view and hire the perfect ride for you
                  </div>
                        <div className="mt-5">
                            We understand you have choices; therefore, it is important to us that you make <span className="text-brand-color">VIP FLEETS </span> your preferred choice.
                  </div>

                        <div className="mt-5 italic font-bold">
                            ‘We treat our clients like VIPs’.
                  </div>
                        <div>
                            Please download the form below to obtain a copy of our most recent price list for the year (2022)
                       </div>
                        <button className="p-2 mt-2 flex items-center bg-brand-color text-white-color rounded-md"> Download <AiOutlineDownload className="ml-5" /></button>
                    </div>
                    <div className="mt-5 flex justify-center items-center">
                        <div className="flex w-4/5 justify-between">
                            <Card className="bg-snow w-2/5 p-5">
                                <div>
                                    {"Do you want special offer from VIP FLEETS?"}
                                </div>
                                <div className="flex text-xs italic mt-5 text-brand-color cursor-pointer">
                                  <div style={{flex:0.7}}>Click here </div> <AiOutlineArrowRight/>
                                </div>
                            </Card>
                            <Card className="bg-snow w-2/5 p-5">
                                <div>
                                   {" Do you want to partner with VIP FLEETS?"}
                                </div>
                                <div className="flex text-xs italic mt-5 text-brand-color cursor-pointer">
                                   <div style={{flex:0.7}}>Click here </div> <AiOutlineArrowRight/>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <News />
        </>
    )
}