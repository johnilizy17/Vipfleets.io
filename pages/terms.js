import Navbar from '../components/Header/Navbar'
import Questions from '../components/result/Conditions';
import News from '../components/home/News'
export default function FAQ() {
    return (
        <div className="font-serif">
            <Navbar />
            <div className="flex flex-col mt-20 items-center">
               <div style={{fontSize:17, fontWeight:"bold"}}>
               TERMS AND CONDITIONS
                </div>
                <div className="italic text-center sm:ml-5 sm:mr-5 mt-2">
                {"These Terms and Condition reflect the way VIP FLEETS business works."}
                 </div>
                 <ol className="w-screen list-decimal flex flex-col mt-10 justify-center items-center ">
                <Questions asked="Terms and Conditions" result="terms"/>
                <Questions asked=" Confirming your booking and taking payment" result="payment"/>
                <Questions asked=" Accuracy of Information" result="information"/>
                <Questions asked="Driver, Fuelling and Car Park Charge" result="fuelling"/>
                <Questions asked="Hire Duration" result="hire"/>
                <Questions asked="Driving Areas Restrictions" result="restriction"/>
                <Questions asked="Cancellations and Amendments" result="Cancellations"/>
                <Questions asked="Important Information Regarding Exchange Rates" result="exchange"/>
                <Questions asked="Complaints and forgotten items in our vehicle" result="complaints"/>
                <Questions asked="Terms of Your Contract" result="contract"/>
                <Questions asked="Making Bookings and Purchasing or Requesting Products or Services" result="booking"/>
                <Questions asked="Website Conditions of Use" result="website"/>
                <Questions asked="Data Protection" result="protection"/>
                <Questions asked="Customer Reviews" result="reviews"/>
                </ol>
                <div className="ml-5 mr-5 text-center font-semibold mb-10 italic">
               {"The General Information and Terms & Conditions stated on this site are correct at the time of going to press."}
                </div>
            </div>
            <News/>
        </div>
    )
}