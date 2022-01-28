import Image from 'next/image';
import Logo from '../../asset/logo.png';
import Link from 'next/link';
import Pages from './Pages';
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';

export default function News() {
    return (
        <div className="font-serif bg-grey pb-5 pt-5 font-semibold" >
            <div className="flex lg:ml-20 lg:mr-20 sm:mr-5 sm:ml-5">
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
                <div className="sm:flex sm:justify-center" style={{flex:1}}>
                    <div className="lg:grid lg:grid-cols-3 lg:grap-2">
                        <Pages name="Hire a Ride" routes="/ride" />
                        <Pages name="Teams" routes="/teams" />
                        <Pages name="Policy" routes="/policies" />
                        <Pages name="FAQ" routes="/FAQ" />
                        <Pages name="About" routes="/about" />
                        <Pages name="Partner & Special offer" routes="/parter_special_offer" />
                    </div>
                </div>
                <div>
                    <div className="float-right  basis-2/5">
                        Follow us
                        <div className="flex justify-between items-center mt-2">
                            <a className="mr-5" href="">
                                <BsInstagram />
                            </a>
                            <a className="mr-5" href="">
                                <BsTwitter />
                            </a>
                            <a className="mr-5" href="">
                                <BsFacebook />
                            </a>
                            <a className="mr-5" href="">
                                <BsLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}