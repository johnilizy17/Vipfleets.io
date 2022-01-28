import React from 'react';
import image4 from '../../asset/SlideImage/image5.jpg'
import image6 from '../../asset/SlideImage/airport.jpg'
import Image from 'next/image'

export default function Airport() {

    return (
        <>
            <div className=" sm:hidden m-40 mb-20 mt-20 flex flex-row justify-between">
                <div className="mr-10">
                    <div className="font-semibold mb-2 text-brand-color">
                        Airport pick and drop:
                </div>
                    <div className=" mb-2">
                        Don’t be left stranded at the airport. To schedule a ride to or from the airport is easy, convenient and reliable.Don’t be left stranded at the airport. To schedule a ride to or from the airport is easy, convenient and reliable.
                </div>
                <div className="text-sm mt-2">
                        Send in your hire request either via email (<a href="mailto:joinus@vipfleets.io" className="text-brand-color">enquire@vipfleets.io</a>) or on our airport PICK/DROP dedicated WhatsApp numbers. 
                </div>
                </div>
                {/* <div className="basis-2/5 mr-10">
                    <Image src={image6} style={{ width: "100vw", height: "100vw" }} />
                </div> */}
            </div>
            <div className=" lg:hidden m-5 mt-15">
                   <div className="basis-2/5">
                    <div className="font-semibold mb-2 text-brand-color">
                        Airport pick and drop:
                </div>
                    <div className=" mb-2">
                        Don’t be left stranded at the airport. To schedule a ride to or from the airport is easy, convenient and reliable.
                </div>
                        <div className="text-sm mt-2">
                        Send in your hire request either via email (<a href="mailto:joinus@vipfleets.io" className="text-brand-color">enquire@vipfleets.io</a>) or on our airport PICK/DROP dedicated WhatsApp numbers. 
                </div>
                    <div className="text-sm mb-2">
                        Hire Line:
                        Hire Line:
                </div>
                    
                </div>
            </div>
        </>
    )
}