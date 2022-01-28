import React, { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import { Card } from '@mui/material';
import News from '../components/home/News';

export default function Policy() {

    const [toggle, setToggle] = useState(true)

    return (
        <div className="font-serif  pb-5">
            <Navbar />
            <div className="lg:flex h-screen lg:ml-20 sm:ml-5 lg:mr-20 sm:mr-5">
                <div className="basis-1/4 sm:flex sm:items-center sm:mb-2 cursor-pointer ">
                    <div className={toggle && "bg-brand-color text-white-color p-2"} onClick={() => setToggle(true)}>
                        Policy
                    </div>
                    <div className={!toggle ? "bg-brand-color lg:mt-2 sm:ml-5 text-white-color p-2" : "lg:mt-2 sm:ml-5"} onClick={() => setToggle(false)}>
                        VALUES
                    </div>
                </div>
                <Card className="basis-3/4 lg:h-4/5 p-10">
                    {toggle ?<div>
                        <div className="mb-5 text-brand-color font-semibold">
                            POLICY
                      </div>
                        <div>
                            VIP FLEETS always place the interests of our customers and their safety first. We will provide an individualized rental experience that assures customer satisfaction and earns the unwavering loyalty of our customers
                        </div>
                    </div>:
                    <div>
                    <div className="mb-5 text-brand-color font-semibold">
                    VALUES
                  </div>
                    <div>
                    VIP FLEETS is known for the importance we attach to customer satisfaction, professional drivers, ethical business behaviour and respect towards our clients and employees. We work by these principles and always adhere to them.
                    </div>
                </div>
                }
                </Card>
            </div>
            <News/>
        </div>
    )
}