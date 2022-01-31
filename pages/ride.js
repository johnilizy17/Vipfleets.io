import Navbar from '../components/Header/Navbar';
import Whatsapp from '../components/Whatsapp/Whatsapp';
import News from '../components/home/News';
import { IoIosCall } from 'react-icons/io';
import pardo from '../asset/cars/pardo.jpg'
import Image from 'next/image';
import Link from 'next/link';

export default function Ride() {
    return (
        <div className="font-serif  lg:pb-5">
            <div>
                <Navbar />
            </div>
            <div>
                <Image src={pardo} alt="pardo" />
            </div>
            <div >
                <div>
                    <div>
                        <center className=" text-white-color lg:ml-20 sm:ml-5  relative lg:bottom-40 sm:bottom-32">
                            <div className="lg:text-3xl sm:text-2xl text-center font-semibold">
                                HIRE A RIDE
                            </div>
                            <div className="lg:text-2xl text-center">
                                To hire from
                                us takes only a few minutes of your precious time.
                        </div>
                        </center>
                        <div className="bg-white-color relative lg:bottom-20 sm:bottom-20  pt-5 pb-20">
                            <div className=" lg:pl-20 lg:pr-20 sm:pl-5 sm:pr-5  lg:w-2/4">
                             <div className="lg:mt-5">
                                    The fastest way to hire is by calling or by simply sending us a WhatsApp message on any of the hire lines below and a member of our team would be more than happy to take your reservation.
                             </div>
                             <div className="mt-5">
                                    We have a large fleet of vehicles for you to select from, why not press on <Link passHref={true} href="/fleets">
                                     <span className="text-brand-color  cursor-pointer"> OUR FLEETS </span> 
                                     </Link> to view and hire the perfect ride for you.
                             </div>
                                <a href="callto:08102861988">
                                    <div className="flex items-center mt-2 cursor-pointer" style={{ width: 200 }} >
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
                        <div>

                        </div>
                        <div className="basis-3/4">
                        </div>
                    </div>
                </div>
                <div>
                    
                   <div className="">
                    <News />
                    </div>

                </div>

            </div>
            <div className="fixed bottom-8 right-0">
                <Whatsapp />
            </div>
        </div >
    )
}