import Navbar from '../components/Header/Navbar'
import Link from 'next/link'
import { IoIosCall } from 'react-icons/io';
import { Button, Card } from '@mui/material'
import airport from '../asset/airport2.jpg'
import Image from 'next/image'
import { AiOutlineDownload, AiOutlineArrowRight } from 'react-icons/ai';
import News from '../components/home/News'

export default function About() {
    return (
        <>
            <div className="font-serif sm:-mb-10">
                <Navbar />
                <Image src={airport} alt="the teams image" />
                <center className=" text-white-color lg:ml-20 sm:ml-5  relative lg:bottom-32 sm:bottom-32">
                    <div className="font-semibold lg:text-3xl sm:text-2xl">
                        AIRPORT PICK AND DROP
              </div>
                    <div className="lg:text-2xl text-center">
                        At VIP FLEETS we offer a reliable and efficient service.
                        </div>
                </center>
                <div className=" lg:m-20 lg:mt-20 relative lg:bottom-32 sm:bottom-36  lg:mb-10 sm:m-5 sm:mb-10">
                    <div className="basis-2/5">
                        <div className="lg:mt-5 sm:mt-20">
                            Don’t be left stranded at the airport. </div>
                        <div className="lg:mt-5 sm:mt-2">To schedule a ride to or from the airport is easy, convenient and reliable.
                   </div>
                        <div className="lg:mt-5 sm:mt-2">
                            Our airport pickup  and drop service is available at all Lagos terminals, we also operate similar services in Abuja and Port Harcourt.   </div>
                        <div className="text-left mt-2">
                            Send in your hire request either via email (<a href="mailto:joinus@vipfleets.io" className="text-brand-color">enquire@vipfleets.io</a>) or on our airport PICK/DROP dedicated WhatsApp numbers.
                </div>
                <a href="callto:08102861988">
                                    <div className="flex items-center  mt-6 cursor-pointer" style={{ width: 200 }} >
                                        <IoIosCall className="mr-2" /> 08102861988 <span className="ml-2 italic text-xs">(MTN) </span>
                                </div>
                                </a>
                                <a href="callto:00000000" className="mb-2">
                                    <div className="flex items-center  mt-2 cursor-pointer" >
                                        <IoIosCall className="mr-2" />  07018097044 <span className="ml-2 italic text-xs"> (Airtel)</span>
                               </div>
                                </a>
                                <div className="text-xs mt-2">
                                    {" (These numbers are on WhatsApp)"}
                                </div>
                    </div>

                </div>
            </div>
            <News />
        </>
    )
}