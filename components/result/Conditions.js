import React, { useState } from 'react';
import { Card } from '@mui/material';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

export default function AnswerQuestion({ asked, result }) {

    const [answers, setAnswers] = useState(false)

    function statemanager() {
        if (result == "terms") {
            return (
                <div className="text-justify">
                    <div>
                        These terms & conditions, constitute our agreement with you, for the services we provide in arranging for the supply of vehicle hire.
            </div>
                    <div>
                        We may change our terms from time to time and you are advised to check our website or speak with a member of our team to consider any changes to the terms which apply to your hire prior to your booking.
            </div>
                    <div>
                        Your hire of any vehicle is subject to the terms & conditions imposed by the car hire company (VIP FLEETS). Please note that some restrictions may also apply to some vehicles.
            </div>

                    <div className="sm:mt-2 lg:mt-5">
                        You will be provided with a vehicle owned either directly by VIP FLEETS or by any of our partners. Both our terms and those of the partners we work with contain some exclusions and limitations of liability.
            </div>
                    <div>
                        Booking with us is conditional on you accepting our terms. If you do not agree with any part of them or for clarification, you must not proceed with your booking. By confirming that you wish to book a vehicle with VIP FLEETS, indicates that you have read and understood and accept our terms. If there is any part that you do not fully understand, or if you have a query about the vehicle hire or any other related services, please contact us immediately.
            </div>
                </div>
            )
        } else if (result == "payment") {
            return (
                <div className="text-justify">
                    <div>
                        You will not have a contract until we have confirmed your booking and taken the payment. We will send all correspondence to the address or WhatsApp number provided when making the booking.
               </div>
                    <div>
                        VIP FLEETS will only confirm your booking once payment has been made. You will immediately receive our confirmation either via the email address provided when the booking is made or by the WhatsApp number submitted. Please note that for your reservation to be guaranteed payment must be made.
               </div>
                </div>
            )
        } else if (result == "information") {
            return (
                <div>
                    <div>
                        It is solely your <span className="italic">(the client)</span> responsibility to evaluate the accuracy, completeness and usefulness of all information provided when making your booking either over the phone or on this site.
                        We <span>(the company)</span> cannot accept liability for any error, fault information provided by the client when making your booking.
                    </div>
                    <div>
                        You will accept full responsibility regarding the information provided when making your booking.
                    </div>
                </div>
            )
        } else if (result == "fuelling") {
            return (
                <div className="text-left">
                    <div>
                        Here at VIP FLEETS all our vehicles are assigned with a professional, trained and licenced chauffeur, we do not permit self-drive.
                    </div>
                    <div>
                        In the event where the hire duration exceeds a day or hire is outside the cities we operate <span className="text-brand-color"> (Lagos, Abuja and Port Harcourt),</span> our customers are given the opportunity to fuel but in most cases all our hires are inclusive of fuelling by the company.
                    </div>
                    <div className="sm:mt-2 lg:mt-5">
                        Fees for car park within an hour of waiting is payable by the company, waiting time after 1 hour is charged to the client.
                    </div>
                </div>
            )
        } else if (result == "hire") {
            return (
                <div>
                    <div>
                        Majority of our hire duration is for 12 hours – (i.e., 7am to 7apm).
                        Over time charges applies after the set duration hours expires (over time rate depends on the class of vehicle hired).
                </div>
                    <div>
                        Although some hire vehicles duration within our fleets cannot exceed 10 hours due to their class - (please speak to a member of our team for more information).
                </div>
                    <div className="sm:mt-2 lg:mt-5">
                        It’s important to note that, day hire expires at 10pm (any movement after 10pm is considered as NIGHT HIRE). We offer NIGHT HIRE service here at VIP FLEETS, the rate depends on model and year of vehicle.
                  </div>
                    <div className="sm:mt-2 lg:mt-5 italic ">
                        (Please speak to a member of our team for more information and our rates).
                    </div>
                </div>
            )
        } else if (result == "restriction") {
            return (
                <div>
                    <div>
                        Restrictions may be applicable when taking the hire vehicle to a different area outside the main metropolitan and or when hire is outside the states of our core operations. Restrictions may also apply in remote areas such as areas with extremely poor roads and flooded zones.
                  </div>
                    <div className="sm:mt-2 lg:mt-5">
                        For remote and restricted areas, it is our policy here at VIP FLEETS to assign a MOPOL (police). This extra service is charged to the client.
                </div>
                </div>
            )
        } else if (result == "Cancellations") {
            return (
                <div>
                    <div>
                        At VIP FLEETS we have a no REFUND POLICY on deposits and full payment bookings.
                    </div>
                    <div className="sm:mt-2 lg:mt-5">
                        Management <span className="underline font-semibold">MIGHT</span> choose to manifest discretion on some emergency grounds, this consideration is for cancellation that is within 24hrs frame from the time of the booking. You can make amendment to your booking anytime; amendment of date would be charged at 40% of the total value.
                    </div>
                    <div className="sm:mt-2 lg:mt-5">
                        There is no administration fee for amending your booking, but any amendment you make may affect the rental price. Sometimes, the only way we can amend a booking is to cancel it and make another one, in which case we may charge you a cancellation fee.
                   </div>
                    <div className="sm:mt-2 lg:mt-5">
                        If amending your booking would change the price or incur a cancellation fee, we will tell you in advance.
                   </div>
                </div>
            )
        } else if (result == "exchange") {
            return (
                <div>
                    <div>
                        For customers paying in foreign currencies due to the fluctuation of exchange rates, please be aware that the amount charged would be in accordance with CBN. The difference (if any) will depend on changes to exchange rates during the period between the moment you book and the moment the charge is reflected. Similarly, should we refund any money to your account, we will refund the exact amount initially charged – and will not be responsible for any fluctuations in exchange rates that lead to you receiving a larger or smaller refund than expected.
                    </div>
                </div>
            )
        } else if (result == "complaints") {
            return (
                <div>
                    <div>
                        If you are dissatisfied with your rental vehicle or forgot an item in any of our vehicle, please report this to us immediately by sending us an email to <a href="mailto:feedback@vipfleets.io" className="text-brand-color">feedback@vipfleets.io</a> or send a WhatsApp to any of our contact numbers.
                    </div>
                    <div className="sm:mt-2 lg:mt-5">
                        A member of our team will respond to your email within 2hours. Most complaints are usually solved internally, and our feedback would certainly be mailed to the customer.
                    </div>
                    <div className="sm:mt-2 lg:mt-5">
                        We accept no responsibility for, nor shall we held liable for any items that are damaged, altered or which have been forgotten or left in the vehicles.
                    </div>
                </div>
            )
        } else if (result == "contract") {
            return (
                <div>
                    <div>
                        However, you choose to book, it is important to understand how and when a contract is formed. The technical steps required for a contract to be formed are as follows. When we quote prices over the telephone or place our services on our website, we are inviting you into a contract.
                    </div>
                    <div className="sm:mt-2 lg:mt-5">
                        You will have made us an offer to purchase the services once you have either done so verbally or by making your payment. We will have accepted this offer once we have both received the necessary payment and reservation available to you.
                    </div>
                    <div className="sm:mt-2 lg:mt-5">
                        We have the right to cancel a booking upon limited or immediate notice in certain circumstances.<br />
                        In all circumstances we will use our reasonable endeavours to arrange for the supply of an alternative car, but at periods of high demand it may not be possible. Where a customer has made a fully pre-paid booking and we notify the customer up to 48 hours before pick-up, the customer will receive a return of all monies already paid.
                    </div>
                </div>
            )
        } else if (result == "booking") {
            return (
                <div>
                    <div>
                        If you wish to make bookings or to purchase or request products or services described on this website, we (or our business partners) may ask you to supply certain data applicable to your booking or purchase – including, without limitation, credit card information and other personally identifiable data about you. You understand that any such data will be treated by us in the manner described in our privacy notice. You agree that all data that you provide for this purpose will be accurate, current and complete. You agree to pay all charges incurred by you or any users of your account, credit card or other payment mechanism at the rate(s) or price(s) in effect when such charges are incurred.
                    </div>
                    <div className="sm:mt-2 mt-5">
                        Verification of submitted data may be required prior to our acceptance of any booking, purchase or order.
                    </div>
                </div>
            )
        }
        else if (result == "website") {
            return (
                <div>
                    <div>
                        It is prohibited for anyone to use any device or software program to directly or indirectly interface, or attempt to interface, with this website to retrieve content and/or any other data, including prices. It is also prohibited to interfere, or attempt to interfere, with the normal working of this website; any activity that we consider places undue load or stress on our systems will be terminated. We constantly monitor everyone accessing our website, and the activities of any automated systems or persons conducting an unreasonable number of searches, with the aim of accessing information and/or prices, will be terminated and those systems/persons blocked from our websites. Your use of the website indicates your agreement to be bound by these Conditions of Use.
                    </div>
                </div>
            )
        }
        else if (result == "protection") {
            return (
                <div>
                    <div>
                        Your privacy is important to us. By using this site, you accept the terms of our privacy notice.
                    </div>
                    <div className="sm:mt-2 lg:mt-5">
                        We may use cookies and other technologies to facilitate and track your use of services offered on this website and in connection with our email communications. For more information on this, please see our privacy notice.
                    </div>
                </div>
            )
        } else if (result == "reviews") {
            return (
                <div>
                    <div>
                    Completed reviews may be uploaded onto our website for the sole purpose of informing customers of your opinion of the service and quality of the vehicle hired and used partially or in their entirety by VIPFLEETS.IO on our platforms, social media platforms, newsletters, special promotions, mobile applications or other channels owned, hosted, used or controlled by VIPFLEETS.IO. <br/>
                    By submitting a review, you are consenting to the above use of your review. We reserve the right to adjust, refuse or remove reviews at our sole discretion.
                    </div>
                    <div className="sm:mt-2 lg:mt-5">
                    Reviews express the personal opinions of VIPFLEETS.IO customers who filled out a survey after completion of their rental.                     </div>
                </div>
            )
        }

    }



    return (
        <Card className="p-10 pt-5 pb-5 w-4/5  mb-10 "
            onClick={() => {
                if (answers) {
                    setAnswers(false)
                } else {
                    setAnswers(true)
                }
            }}>
            <div className={answers ? " flex w-full text-left text-brand-color font-semibold  items-center" : " flex text-left items-center"}>
                <li className="basis-5/5" style={{ flex: 1 }}><div>{asked}</div></li><div className="ml-2">{answers ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</div>
            </div>
            {answers &&
                <div className="mt-5 text-left">
                    {statemanager()}
                </div>
            }
        </Card>
    )
}