import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import customer2 from '../../asset/sent.jpg'
import customer from '../../asset/customer.jpg'
import { AiOutlineDoubleRight } from 'react-icons/ai'

export default function CustomerFeedBack() {
    return (
        <>
            <div className=" sm:hidden flex flex-row ">
                <div className="basis-2/5">
                    <div className=" text-justify mb-5 ml-20 flex items-center text-xl font-semibold text-brand-color">
                        <div style={{ flex: 1 }}>  Customer feedback </div> <AiOutlineDoubleRight />
                    </div>
                    <div className=" sm:hidden  flex  flex-row basis-3/3" >
                        <div>
                            <Image src={customer2} object-fit="contain" alt="customer" />
                        </div>
                    </div>
                </div>
                <div className="basis-1/5"/>
                <div className="basis-2/5 text-justify">
                    <div className="w-4/5 text-justify float-right mb-2 m-20 mt-10">
                        At <span className="text-brand-color font-semibold">VIP FLEETS,</span> as much as revenue is crucial to our growth and development, so is good customer service and client experience.
                    </div>
                    <div className="w-4/5 float-right text-justify m-20 mb-5 mt-0">
                        Since our launch, we have been privileged to chauffeur uncountable clients. Our team were able to get conduct reviews on our client experiences.<br />
                        <div className="text-xs text-left ">
                            (Visit our <a href="https://www.instagram.com/vipfleets" className="text-brand-color">IG page VIPFLEETS,</a> for customer feedback of exact reviews).
                     </div>
                    </div>
                    <div className="w-4/5  float-right bg-brand-color h-50 text-white-color" >
                        <div className="mt-20  flex flex-col justify-center items-center ">
                            <Carousel
                                width={400}
                                showStatus={false}
                                showArrows={false}
                                showThumbs={false}
                                showIndicators={false}
                                autoPlay={true}
                                infiniteLoop={true}
                                style={{ flex: 1 }}
                            >

                                <div className="text-center">
                                    {` "Thank you for the outstanding service as always" `}
                                </div>
                                <div className="text-center">
                                    {` "Service great, drivers professional, very punctual" `}
                                </div>
                                <div className="text-center">
                                    {` "The vehicle’s absolutely fantastic, quality as always" `}
                                </div>
                                <div className="text-center">
                                    {` "Great customer service, I’m impressed" `}
                                </div>
                                <div className="text-center">
                                    {` "Great driving experience with your drivers" `}
                                </div>
                                <div className="text-center">
                                    {` "You have the best driver, well trained" `}
                                </div>
                                <div className="text-center">
                                   {` "...you guys are the best, your service is great, and your driver is cool" `}
                               </div>
                                <div className="text-center">
                                    {` "Your driver was really nice and humble; I look forward to more business with you" `}
                               </div>
                                <div className="text-center">
                                    {` "Thank you very much, it was a smooth ride with your escort to and fro. I won’t hesitate to book VIP FLEETS on my next journey" `}
                               </div>
                            </Carousel>
                        </div>
                        <div className="h-1/5 mb-2 text-justify flex items-center ml-5">
                            Customer Feedback
                        </div>
                    </div >
                    <div className="w-4/5 float-right text-justify mb-2 mt-5 m-20">
                        Our management team would love to hear from you, whether it is to share your experiences or just to motive us, send us a quick email to<a href="mailto:feedback@vipfleets.io" className="text-brand-color"> feedback@vipfleets.io.</a>
                        <span className="text-xs"><br /> (opps they sometimes get carried away attending to numerous of hire request daily, don’t worry we always respond).</span>

                    </div>
                </div>
            </div>
            <div className=" lg:hidden text-justify">
                <div text-justify>
                    <div className=" mb-5 text-justify ml-5 pr-5 flex items-center text-xl font-semibold text-brand-color">
                        <div style={{ flex: 1 }}>  Customer feedback </div> <AiOutlineDoubleRight />
                    </div>
                    <div className="flex  flex-row basis-3/3" >
                        <div>
                            <Image src={customer} object-fit="contain" alt="customer" />
                        </div>
                    </div>
                </div>
                <div/>
                <div>
                    <div className="mb-2 m-5">
                        At <span className="text-brand-color text-justify font-semibold">VIP FLEETS, </span> as much as revenue is crucial to our growth and development, so is good customer service and client experience.
                    </div>
                    <div className="m-5 mb-5 text-justify mt-0">
                        Since our launch, we have been privileged to chauffeur uncountable clients. Our team were able to get conduct reviews on our client experiences.<br />
                        <div className="text-xs tracking-tighter flex">
                            (<div>Visit our <a href="https://www.instagram.com/vipfleets" className="text-brand-color">IG page VIPFLEETS,</a> for customer feedback of exact reviews</div>).
                     </div>
                    </div>
                    <div className="bg-brand-color text-justify pt-20 h-60 text-white-color" >
                        <div style={{width:"100%",height:100, display:"grid", justifyContent:"center", alignItems:"center" }}>
                            <Carousel
                                width={350}
                                showStatus={false}
                                showArrows={false}
                                showThumbs={false}
                                showIndicators={false}
                                autoPlay={true}
                                infiniteLoop={true}
                                style={{ flex: 1 }}
                            >

                                <div>
                                    {` "Thank you for the outstanding service as always" `}
                                </div>
                                <div>
                                    {` "Service great, drivers professional, very punctual" `}
                                </div>
                                <div>
                                    {` "The vehicle’s absolutely fantastic, quality as always" `}
                                </div>
                                <div>
                                    {` "Great customer service, I’m impressed" `}
                                </div>
                                <div>
                                    {` "Great driving experience with your drivers" `}
                                </div>
                                <div>
                                    {` "You have the best driver, well trained" `}
                                </div>
                                <div>
                                    {` "...you guys are the best, your service is great, and your driver is cool" `}
                               </div>
                                <div>
                                    {` "Your driver was really nice and humble; I look forward to more business with you" `}
                               </div>
                                <div>
                                    {` "Thank you very much, it was a smooth ride with your escort to and fro. I won’t hesitate to book VIP FLEETS on my next journey" `}
                               </div>
                            </Carousel>
                        </div>
                        <div className="mt-2 text-justify ml-5">
                            Customer Feedback
                        </div>
                    </div >
                    <div className="w-4/5 text-justify  mb-2 mt-5 m-5">
                        Our management team would love to hear from you, whether it is to share your experiences or just to motive us, send us a quick email to<a href="mailto:feedback@vipfleets.io" className="text-brand-color"> feedback@vipfleets.io.</a>
                        <span className="text-xs text-justify"><br /> (opps they sometimes get carried away attending to numerous of hire request daily, don’t worry we always respond).</span>

                    </div>
                </div>
            </div>

        </>
    )
}