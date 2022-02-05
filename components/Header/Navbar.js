import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../asset/logo.png';
import { BiSearchAlt } from "react-icons/bi";
import { HiMenuAlt3 } from 'react-icons/hi';
import { FiX } from 'react-icons/fi';
import Link from'next/link';
import Navbutton from './Navbutton'
import NavSlider from './NavSlider'
import {Card} from '@mui/material'

export default function Navbar() {

    const [menubar, setmenubar] = useState(true);

    return (
        <>
            <div className="md:hidden  sm:hidden lg:flex flex-row items-center bg-white-color mb-10 pl-20 pt-2 pr-20">
                <Link passHref={true} href="/">
                    <div className="basis-1/3 cursor-pointer" >
                        <Image src={logo} alt="vipfleets logo" width={70} height={70} />
                    </div>
                </Link>
                <div className="basis-full flex">
                    <div className="flex flex-row items-center justify-between" style={{flex:0.7}}>
                    <Navbutton name="Home" links="/"/>
                    <Navbutton name="Hire a ride" links="/ride"/>
                    <Navbutton name="Fleets" links="/fleets"/>
                    <Navbutton name="Airport" links="/airport"/>
                    <Navbutton name="FAQ" links="/FAQ"/>
                    <Navbutton name="Team" links="/teams"/>
                    </div>
                </div>
            </div>
            <div>
                <div className={menubar ? "lg:hidden   bg-white-color mt-5 z-20 w-screen" :"lg:hidden bg-car-img bg-no-repeat bg-cover -mt-2 h-screen bg-white-color   z-20 w-screen top-0 fixed"}>
                <div className="lg:hidden sm:flex items-center m-5 items-center">
                    
                        <Link passHref={true} href="/">
                            <div className="cursor-pointer mt-2"  style={{flex:1}}>
                                <Image src={logo} alt="vipfleets logo" width={50} height={50} />
                            </div>
                        </Link>
                    
                    <div onClick={() => {
                        if (menubar) {
                            setmenubar(false)
                        } else {
                            setmenubar(true)
                        }
                    }}>
                        {menubar ? <HiMenuAlt3 style={{ width: 50, height: 50 }} />
                            : <FiX style={{ width: 50, height: 50, color:"#3e4095" }} />}
                    </div>
                </div>
                {!menubar &&
                    <div className="flex flex-col pl-2 basis-2/3 pb-10   font-semibold" style={{width:"100%"}}>
                    <NavSlider links= "/" name="Home"/>
                    <NavSlider links= "/ride" name="Hire a Ride"/>
                    <NavSlider links="/fleets" name="Fleets"/>
                    <NavSlider links= "/airport" name="Airport"/>
                    <NavSlider links= " /FAQ" name="FAQ"/>
                    <NavSlider links= "/teams" name="Team"/>
                    </div>
                    }

                    </div>
                    
            </div>
        </>
    )
}