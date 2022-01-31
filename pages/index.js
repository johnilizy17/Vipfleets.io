import Navbar from '../components/Header/Navbar';
import Main from '../components/home/Main';
import Slide from '../components/home/Slide';
import Airports from '../components/home/about';
import CustomerFeedBack from '../components/home/Information';
import Footer from '../components/home/Footer';
import News from '../components/home/News';
import Whatsapp from '../components/Whatsapp/Whatsapp';

export default function Home() {
  
  return (
    <div className="font-serif  pb-5">
      <Navbar/>
      <Main/>
      <Slide/>
      <Airports/>
      <CustomerFeedBack/>
      <div className="bg-grey">
      <Footer/>
      <News/>
      </div>
      <div className="fixed bottom-8 right-0">
      <Whatsapp/>
      </div>
    </div>
  )
}
