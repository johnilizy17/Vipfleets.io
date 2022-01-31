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
                {"Here are answers to most common questions."}<br/> {"Can't find an answer? Call us!"}
                 </div>
                 <div className="w-screen flex flex-col mt-10 justify-center items-center ">
                <Questions asked="1 : Q Does my hire come with a chauffeur?" result="A: Yes, all vehicles come with a professional driver. "/>
                <Questions asked="2 : Q Can I drive the car myself?" result="A: No self-drive is permitted at VIP FLEETS."/>
                <Questions asked="3 : Q What is the duration on each hire?" result="A: Each hire duration is 12 hours, day hire expires at 10pm, any movement after 10pm is considered as night hire : which attracts extra charge."/>
                <Questions asked="4 : Q Do you offer night movement hire?" result="A: Yes, night hire is available – rate depends on the year and model of the vehicle. "/>
                <Questions asked="5 : Q If I cancel my hire totally do I get a refund?" result="A: Unfortunately, no refund on cancellation after 24hrs."/>
                <Questions asked="6 : Q Do I get charged for change of date?" result="A: If the change of date is made within 24hours, there’s no charge. Any changes after 24hrs attracts a 40% fee from the total value of the hire. "/>
                <Questions asked="7 : Q Can I get a Mopol (police escort) with my hire?" result="A: Yes"/>
                <Questions asked="8 : Q Can I smoke in the car?" result="A: No smoking is permitted inside the vehicle "/>
                <Questions asked="9 : Q Which States do you have your operations?" result="A: We operate in Lagos, Abuja and Port Harcourt."/>
                <Questions asked="10 : Q Do you offer inter-state movement outside your States of Operations?" result="A: Yes"/>
                <Questions asked="11 : Q If I have a complain who do I contact?" result="A: Please forward all complains to any of our WhatsApp HIRE LINES."/>
                <Questions asked="12 : Q If I have a complain who do I contact?" result="A: VIP FLEETS is fully registered with CAC (Corporate Affairs Commission)."/>
                </div>
            </div>
            <News/>
        </div>
    )
}