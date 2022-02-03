import Navbar from '../components/Header/Navbar'
import Questions from '../components/Answers/Question';
import News from '../components/home/News'
export default function FAQ() {
    return (
        <div className="font-serif">
            <Navbar />
            <div className="flex flex-col mt-20 items-center">
               <div style={{fontSize:17, fontWeight:"bold"}}>
               Frequently Asked Questions
                </div>
                <div className="italic text-center mt-2">
                {"Here are answers to most common questions."}<br/> {"Can't find an answer?"}<br/>{"Call us!"}
                 </div>
                 <ol className="w-screen list-decimal flex flex-col mt-10 justify-center items-center ">
                <Questions asked=" Does my hire come with a chauffeur?" result="Yes, all vehicles come with a professional driver. "/>
                <Questions asked=" Can I drive the car myself?" result="No self-drive is permitted at VIP FLEETS."/>
                <Questions asked=" What is the duration on each hire?" result="Each hire duration is 12 hours, day hire expires at 10pm, any movement after 10pm is considered as night hire which attracts extra charge."/>
                <Questions asked=" Do you offer night movement hire?" result="Yes, night hire is available – rate depends on the year and model of the vehicle. "/>
                <Questions asked=" If I cancel my hire totally do I get a refund?" result="Unfortunately, no refund on cancellation after 24hrs."/>
                <Questions asked=" Do I get charged for change of date?" result="If the change of date is made within 24hours, there’s no charge. Any changes after 24hrs attracts a 40% fee from the total value of the hire. "/>
                <Questions asked=" Can I get a Mopol (police escort) with my hire?" result="Yes"/>
                <Questions asked=" Can I smoke in the car?" result="No smoking is permitted inside the vehicle. "/>
                <Questions asked=" Which States do you have your operations?" result="We operate in Lagos, Abuja and Port Harcourt."/>
                <Questions asked=" Do you offer inter-state movement outside your States of Operations?" result="Yes"/>
                <Questions asked=" If I have a complain who do I contact?" result="Please forward all complains to any of our WhatsApp HIRE LINES."/>
                <Questions asked=" If I have a complain who do I contact?" result="VIP FLEETS is fully registered with CAC (Corporate Affairs Commission)."/>
                </ol>
            </div>
            <News/>
        </div>
    )
}