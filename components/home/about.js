import React from 'react';
import Link from 'next/link'
import { AiOutlineDownload, AiOutlineArrowRight } from 'react-icons/ai';

export default function Airport() {

    return (
        <>
            <div className="font-serif">
                <div className=" lg:m-20 lg:mt-20 lg:mb-10 sm:m-5 sm:mb-10">
                    <div className="basis-2/5">
                        <div className="text-xl text-brand-color font-semibold">
                       About us
                   </div>
                        <div className="mt-5 text-justify">
                            Driving can be exhausting at times, especially in a mega city like Lagos.
                      <span className="text-brand-color text-justify">  VIP FLEETS </span> was launched exclusively for you.
                   </div>
                        <div className="mt-5 text-justify">
                            <span className="text-brand-color text-justify"> VIP FLEETS </span> is an indigenous car rental company operating in <span className="text-brand-color"> Lagos</span>, <span className="text-brand-color"> Abuja</span> and <span className="text-brand-color"> Port Harcourt</span>. Our services are designed to ease the stress of self-drive, by providing our clients with an experience of chauffeur driven vehicles in the safest, comfortable and <span className="text-brand-color"> VIP style</span> - these are standard attributes of our carefully selected fleet.
                   </div>
                        <div className="mt-5 text-justify">
                            We have a large fleet of vehicles for you to select from, why not press on  <Link passHref={true} href="/fleets">
                                <span className="text-justify text-brand-color font-bold cursor-pointer underline mr-1">OUR FLEETS</span>
                            </Link> to view and hire the perfect ride for you.
                  </div>
                        <div className="mt-5 text-justify">
                            We understand you have choices; therefore, it is important to us that you make <span className="text-brand-color">VIP FLEETS </span> your preferred choice.
                  </div>

                        <div className="mt-5 italic text-justify mb-5 font-bold">
                            ‘We treat our clients like VIPs’.
                  </div>
                        <div className="text-justify ">
                            Please download the list below to obtain a copy of our most recent price list for the year (2022).
                       </div>
                        <a href="/price.pdf" download="price list.pdf"><button className="p-2 text-justify mt-2 flex items-center bg-brand-color text-white-color rounded-md"> Download Price List <AiOutlineDownload className="ml-5" /></button></a>
                    </div>
                    <div className="mt-5 text-justify flex justify-center items-center">
                        <div className="flex w-4/5 justify-between">
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <>
        //     <div className=" sm:hidden m-40 mb-20 mt-20 flex flex-row justify-between">
        //         <div className="mr-10">
        //             <div className="font-semibold mb-2 text-brand-color">
        //                 Airport pick and drop:
        //         </div>
        //             <div className=" mb-2">
        //                 Don’t be left stranded at the airport. To schedule a ride to or from the airport is easy, convenient and reliable.Don’t be left stranded at the airport. To schedule a ride to or from the airport is easy, convenient and reliable.
        //         </div>
        //         <div className="text-sm mt-2">
        //                 Send in your hire request either via email (<a href="mailto:joinus@vipfleets.io" className="text-brand-color">enquire@vipfleets.io</a>) or on our airport PICK/DROP dedicated WhatsApp numbers. 
        //         </div>
        //         </div>
        //         {/* <div className="basis-2/5 mr-10">
        //             <Image src={image6} style={{ width: "100vw", height: "100vw" }} />
        //         </div> */}
        //     </div>
        //     <div className=" lg:hidden m-5 mt-15">
        //            <div className="basis-2/5">
        //             <div className="font-semibold mb-2 text-brand-color">
        //                 Airport pick and drop:
        //         </div>
        //             <div className=" mb-2">
        //                 Don’t be left stranded at the airport. To schedule a ride to or from the airport is easy, convenient and reliable.
        //         </div>
        //                 <div className="text-sm mt-2">
        //                 Send in your hire request either via email (<a href="mailto:joinus@vipfleets.io" className="text-brand-color">enquire@vipfleets.io</a>) or on our airport PICK/DROP dedicated WhatsApp numbers. 
        //         </div>
        //             <div className="text-sm mb-2">
        //                 Hire Line:
        //                 Hire Line:
        //         </div>
                    
        //         </div>
        //     </div>
        // </>
    )
}