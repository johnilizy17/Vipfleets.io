import Image from 'next/image';
import Logo from '../../asset/logo.png';
import Link from 'next/link';
import Pages from './Pages';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export default function News() {
    return (
        <div className="font-serif bg-grey pb-5 pt-5 font-semibold" >
            <div className="flex sm:flex-col-reverse lg:ml-20 lg:mr-20 sm:mr-5 sm:ml-5">
                <div className="basis-1/5 mr-5" >
                    <Link passHref={true} href="/">
                        <Image
                            src={Logo}
                            width={70}
                            height={70}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="sm:flex" style={{ flex: 1 }}>
                    <div className="grid sm:grid-cols-3 gap-4  ml-3 sm:text-xs  lg:grid-cols-3 lg:grap-2">
                        <Pages name="Hire a Ride" routes="/ride" />
                        <Pages name="Teams" routes="/teams" />
                        <Pages name="Policy" routes="/policy" />
                        <Pages name="FAQ" routes="/FAQ" />
                        <Pages name="Airport" routes="/airport" />
                        <Pages name="Fleets" routes="/fleets" />
                        <Pages name="Partnership" routes="/partner" />
                        <Pages name="Special Offer" routes="/special_offer" />
                    </div>
                </div>
                <div>
                    <div className="lg:float-right  basis-2/5">
                        Follow us
                        <div className="flex justify-between items-center sm:w-1/4  sm:mb-5 mt-2">
                            <a className="mr-5" href="https://www.instagram.com/vipfleets/">
                                <BsInstagram />
                            </a>
                            <a className="mr-5" href="https://www.twitter.com/vipfleets/">
                                <BsTwitter />
                            </a>
                            <a className="mr-5" href="https://www.Linkedin.com/vipfleets/">
                                <BsLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
            <center style={{ fontSize: 10 }} className="mt-2 mb-2 w-full items-center flex text-brand-color justify-center italic">
                Registered Company No:3012043
                    </center>
            <div>
                <center style={{ fontSize: 10 }} className="mt-2 mb-5 pl-5 pr-5 w-full">
                <div className="text-center text-brand-color">
                    All trademarks and copyrights held by VIPFLEETS.IO ¦ VIPFLEETS.IO 2022 All Rights Reserved.
                    </div>
                    </center>
            </div>
        </div>
    )
}