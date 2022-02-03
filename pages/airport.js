import Navbar from '../components/Header/Navbar'
import Link from 'next/link'
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
                        Don’t be left stranded at the airport. To schedule a ride to or from the airport is easy, convenient and reliable.
                   </div>
                   <div className=" mt-2">
                        Send in your hire request either via email (<a href="mailto:joinus@vipfleets.io" className="text-brand-color">enquire@vipfleets.io</a>) or on our airport PICK/DROP dedicated WhatsApp numbers. 
                </div>      
                <ol type="1" className="mt-2">
             <li className="flex items-center " >
            Hire Line:
                <a href="callto:08102861988" className=" flex items-center ml-2">08102861988 <span className="ml-2 italic text-xs">(MTN) </span> </a>
             </li>
             <li className="flex items-center" >
             Hire Line:
             <a href="callto:07018097044" className=" flex items-center ml-2">07018097044 <span className="ml-2 italic text-xs"> (Airtel)</span> </a>
             </li>
            </ol>  
                        <div className="mt-5">
                            <span className="text-brand-color"> VIP FLEETS </span> is an indigenous car rental company operating in <span className="text-brand-color"> Lagos</span>, <span className="text-brand-color"> Abuja</span> and <span className="text-brand-color"> Port Harcourt</span>. Our services are designed to ease the stress of self-drive, by providing our clients with an experience of chauffeur driven vehicles in the safest, comfortable and <span className="text-brand-color"> VIP style</span> - these are standard attributes of our carefully selected fleet.
                   </div>
                       
                       </div>

                </div>
            </div>
            <News />
        </>
    )
}