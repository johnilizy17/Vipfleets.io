import Navbar from '../components/Header/Navbar';
import teamspicture from '../asset/lagos2.jpg';
import Image from 'next/image'
import News from '../components/home/News'
export default function Teams() {
    return (
        <>
            <div className="font-serif  pb-5">
                <Navbar />
                <Image src={teamspicture} alt="the teams image" />
                <div className=" text-white-color lg:ml-20 sm:ml-5  relative lg:bottom-32 sm:bottom-32">
                    <div className="font-semibold text-5xl">
                        Team
              </div>
                    <div className="text-xl">
                        {"Customer service is not a department, it's everyone's job"}
            </div>
                </div>
                <div className=" lg:ml-20 relative lg:bottom-20 sm:bottom-20 lg:pt-10 lg:mr-20 sm:ml-5 sm:mr-5">
                    <div className="lg:basis-2/6">
                        Every member of our Team, which include the chairman, board of directors, investors, partners and operational team, play a vital role within our expanding organisation. Each member of our team is relevant to us.
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
                                <li> <span>1. </span> Operations</li>
                                <li> <span>2. </span> Station Controller</li>
                                <li> <span>3. </span> Marketing Officer</li>
                                <li> <span>4. </span> Office Administration</li>
                                <li> <span>5. </span> Human Resources</li>
                                <li> <span>6. </span> Accounting Officer</li>
                                <li><span>7. </span> ICT </li>
                                <li> <span>8. </span> Social Media Guru</li>
                                <li> <span>9. </span> Logistics <span className="italic text-xs">(We only recruit VALID licence drivers here at VIP FLEETS). </span></li>
                                
                                <li className="mt-2">Please send your C.V to <a href="mailto:joinus@vipfleets.io" className="text-brand-color">joinus@vipfleets.io</a> today.</li>
    
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