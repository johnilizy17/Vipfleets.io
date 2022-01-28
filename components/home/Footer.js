import {Button} from '@mui/material';
import {FaQuoteLeft} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import {IoIosCall} from 'react-icons/io'
export default function Footer(){
    return(
        <>
        <div className="sm:hidden pt-20 mt-20 p-40 ml flex">
          <div className="font-semibold basis-2/4 text-lg">
           Contact Our Experts through
           <br/> the following means 
           
        </div>
        <div className="mt-20">
         <FaQuoteLeft className="text-brand-color"/>
         <div className="ml-7 ">
         You can locate us at Corporate Head Office,Bakky Plaza, Agungi, Lekki Express Way Lagos, Nigeria
         </div>
         <div className="mt-5 ml-7">
           Click here to use google map to get to our Office <Button className="ml-10 bg-google text-white-color">Google Map</Button>
          </div>
          <div className="mt-10 ml-7">
           Contact US Through our mails:
           <ol type="1">
             <li className="flex">
               General enquiries and hire <a href="mailto:enquire@vipfleets.io" className="text-brand-color flex items-center ml-2">enquire@vipfleets.io <AiTwotoneMail className="ml-2"/></a>
             </li>
             <li className="flex">
             Customer feedback and complaints <a href="mailto:feedback@vipfleets.io" className="text-brand-color flex items-center ml-2">feedback@vipfleets.io <AiTwotoneMail className="ml-2"/></a>
             </li>
             <li className="flex">
             Recruitment and training <a href="mailto:joinus@vipfleets.io" className="text-brand-color flex items-center ml-2">joinus@vipfleets.io <AiTwotoneMail className="ml-2"/></a>
             </li>
           </ol>
          </div>
          <div className="mt-10 ml-7">
           Contact US through our order line:
           <ol type="1" className="text-brand-color">
             <li className="flex items-center " >
             <IoIosCall/>
                <a href="callto:enquire@vipfleets.io" className="text-brand-color flex items-center ml-2">0000000000 </a>
             </li>
             <li className="flex items-center" >
             <IoIosCall/>
             <a href="callto:feedback@vipfleets.io" className="text-brand-color flex items-center ml-2">000000000 </a>
             </li>
            </ol>
          </div>
        </div>
        </div>
        <div className="lg:hidden pt-5 mt-10 p-5">
          <div className="font-semibold text-lg">
           Contact Our Experts through
           <br/> the following means 
           
        </div>
        <div className="mt-10">
         <FaQuoteLeft className="text-brand-color"/>
         <div className="ml-7 ">
         You can locate us at Corporate Head Office,Bakky Plaza, Agungi, Lekki Express Way Lagos, Nigeria
         </div>
         <div className="mt-5 ml-7">
           Click here to use google map to get to our Office <Button className="ml-10 bg-google text-white-color">Google Map</Button>
          </div>
          <div className="mt-10 ml-7">
           Contact US Through our mails:
           <ol type="1">
             <li className="flex">
               General enquiries and hire <a href="mailto:enquire@vipfleets.io" className="text-brand-color flex items-center ml-2">enquire@vipfleets.io <AiTwotoneMail className="ml-2"/></a>
             </li>
             <li className="flex">
             Customer feedback and complaints <a href="mailto:feedback@vipfleets.io" className="text-brand-color flex items-center ml-2">feedback@vipfleets.io <AiTwotoneMail className="ml-2"/></a>
             </li>
             <li className="flex">
             Recruitment and training <a href="mailto:joinus@vipfleets.io" className="text-brand-color flex items-center ml-2">joinus@vipfleets.io <AiTwotoneMail className="ml-2"/></a>
             </li>
           </ol>
          </div>
          <div className="mt-10 ml-7">
           Contact US through our order line:
           <ol type="1" className="text-brand-color">
             <li className="flex items-center " >
             <IoIosCall/>
                <a href="callto:enquire@vipfleets.io" className="text-brand-color flex items-center ml-2">0000000000 </a>
             </li>
             <li className="flex items-center" >
             <IoIosCall/>
             <a href="callto:feedback@vipfleets.io" className="text-brand-color flex items-center ml-2">000000000 </a>
             </li>
            </ol>
          </div>
        </div>
        </div>
        </>
    )
}