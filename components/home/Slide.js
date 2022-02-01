import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import customer from '../../asset/noncars/customer.png'
import flight from '../../asset/noncars/flight.png'
import hilux from '../../asset/noncars/hilux.png'
import integrity from '../../asset/noncars/integrity.png'
import registrated from '../../asset/noncars/registrated.png'
import Pardo from '../../asset/cars/prado.jpg'
import Ravor from '../../asset/cars/rover.jpg'
import lx570 from '../../asset/cars/lx570.jpg'
import Image from 'next/image';
import { GoCalendar } from 'react-icons/go'
import { MdLocalAirport, MdOutlineLocationOn } from 'react-icons/md'
export default function Slide() {
    return (
        <div>
            <div className="flex flex-row h-20 z-10 color-black-500 " style={{ position: "relative", width: "96vw" }}>
                <div className="basis-2/4 sm:basis-3/4 flex bg-brand-color justify-center items-center mt-10 " style={{ marginBottom: -40 }}>

                    <div className="flex justify-around w-3/4" style={{ color: "#ffffff" }}>
                        <div className="flex items-center flex-col">
                            <MdLocalAirport style={{ color: "#ffffff" }} />
                            <div style={{ color: "#ffffff" }}>Airport</div>
                        </div>
                        <div className="flex items-center flex-col">
                            <GoCalendar style={{ color: "#ffffff" }} />
                            <div >24/7</div>
                        </div>
                        <div className="flex items-center flex-col">
                            <MdOutlineLocationOn style={{ color: "#ffffff" }} />
                            <div>Any place</div>
                        </div>
                    </div>
                </div>

            </div>
            <Carousel
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
            >

                 <Image alt="pardo" object-fit="contain" src={Pardo} />
               <Image alt="pardo" object-fit="contain" src={integrity} />
               <Image alt="pardo" object-fit="contain" src={Ravor} />
                 <Image alt="pardo" object-fit="contain" src={customer} />
                 <Image alt="LX570" object-fit="contain" src={lx570} />
                <Image alt="ford" object-fit="contain" src={flight} />
                <Image alt="land" object-fit="contain" src={hilux} />
                <Image alt="registrated" object-fit="contain" src={registrated} />
            </Carousel>
        </div>
    )
}