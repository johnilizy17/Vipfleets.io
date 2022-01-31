import Image from 'next/image';
import Logo from '../../asset/logo.png';
import Link from 'next/link';
import Pages from './Pages';
import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

export default function News() {
    return (
        <div className="font-serif bg-grey pb-5 pt-5 font-semibold" >
            <div className="flex sm:flex-col-reverse lg:ml-20 lg:mr-20 sm:mr-5 sm:ml-5">
                <div className="basis-1/5 mr-5" >
                    <Link passHref={true} href="/">
                        <Image
                            src={Logo}
                            width={100}
                            height={100}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className="sm:flex" style={{ flex: 1 }}>
                    <div className="grid sm:grid-cols-4 sm:text-xs  lg:grid-cols-3 lg:grap-2">
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
                            <a className="mr-5" href="">
                                <BsLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
            <div className="text-xs mt-2 w-full flex text-brand-color justify-center italic">
                     Companies registration No:3012043
                    </div>
        </div>
    )
}