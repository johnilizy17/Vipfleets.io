import Navbar from '../components/Header/Navbar';
import teamspicture from '../asset/SlideImage/image4.jpg';
import Image from 'next/image'
import News from '../components/home/News'
export default function Teams() {
    return (
        <>
            <div className="font-serif  pb-5">
                <Navbar />
                <Image src={teamspicture} alt="the teams image" />
                <div className=" text-white-color lg:ml-20 sm:ml-5  relative lg:bottom-40 sm:bottom-32">
                    <div className="font-semibold text-5xl">
                        Team
              </div>
                    <div className="text-xl">
                        {"Customer service is not a department, it's everyone's job"}
            </div>
                </div>
                <div className="lg:flex lg:ml-20 relative lg:bottom-20 sm:bottom-20 lg:pt-10 lg:mr-20 sm:ml-5 sm:mr-5">
                    <div className="lg:basis-2/6">
                        Every member of our team, which include the chairman, board of directors, investors, partners and operational team, play a vital role within our expanding organisation. Each member of our team is relevant to us.
             </div>
                    <div className="lg:basis-2/6 sm:mt-2">
                        We do things quite differently here at <span className="text-brand-color"> VIP FLEETS</span>, the true MVP’s (most valuable players) are our<span className="text-brand-color"> DRIVERS, </span> the logistics team… when next you book a ride with us, please help us appreciate them.
           Driving constantly in Nigeria traffic especially LAGOS require a level of discipline, calmness and professionalism.
    
            </div>
                    <div className="lg:basis-2/6 sm:mt-2">
                        Looking for a company that values its employees and their skills? Join <span className="text-brand-color">VIP FLEETS.</span>
                        <div className="mt-2">
                            If you would like to join any of our growing departments in the areas of:
                </div>
                        <div className="sm:mt-2">
                            <ol>
                                <li>Operations</li>
                                <li>Station Controller</li>
                                <li>Marketing Officer</li>
                                <li>Office Administration</li>
                                <li>Human Resources</li>
                                <li>Accounting Officer</li>
                                <li>Logistics <span className="italic text-xs">(We only recruit VALID licence drivers here at VIP FLEEST). </span></li>
                                <li className="mt-2">ICT </li>
                                <li>Social Media Guru</li>
                                
                                <li className="mt-2">please send your C.V to <a href="mailto:joinus@vipfleets.io" className="text-brand-color">joinus@vipfleets.io</a> today.</li>
                                
                     </ol>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <News />
        </>
    )
}