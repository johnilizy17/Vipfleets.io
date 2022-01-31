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
            <div className="fixed w-screen z-20">
                <Navbar />
            </div>
            <div className="fixed top-20 z-0">
                <Image src={pardo} alt="pardo" />
            </div>
            <div className="absolute  z-10 mt-20">
                <div>
                    <div>
                        <div className="lg:h-screen sm:h-72 flex flex-col text-white-color justify-center items-center">
                            <div className="lg:text-3xl sm:text-2xl font-semibold">
                                HIRE A RIDE
                            </div>
                            <div className="lg:text-2xl text-center">
                                To hire from
                                us takes only a few minutes of your precious time.
                        </div>
                        </div>
                        <div className="bg-white-color  pt-5 pb-20">
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
                                        <IoIosCall className="mr-2" /> 08102861988
                                </div>
                                </a>
                                <a href="callto:00000000" className="mb-2">
                                    <div className="flex items-center  mt-2 cursor-pointer" >
                                        <IoIosCall className="mr-2" />  07018097044
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