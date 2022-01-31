import {FaQuoteLeft} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai';
import {IoIosCall} from 'react-icons/io'
export default function Footer(){
    return(
        <>
        <div className="sm:hidden pt-20 mt-20 p-20 ml flex">
          <div className="font-semibold basis-2/4 text-justify text-lg">
           Contact Our Experts through
           <br/> the following means 
           
        </div>
        <div className="mt-20">
         <div>
        <span className="text-brand-color text-justify text-lg font-semibold"> Address:
          </span>
         <ol type="1">
             <li className="flex text-justify mt-2">
          Corporate Head Office </li>
          <li className="flex mt-2">Bakky Plaza </li>
          <li className="flex mt-2"> Agungi </li>
          <li className="flex mt-2"> Lekki Express Way Lagos </li>
          <li className="flex mt-2"> Nigeria</li>
           </ol>

         </div>
         <div className="mt-2 text-justify">
           Click here to use google map to get to our Office <button className="ml-10 bg-google p-2  rounded-md text-white-color">Google Map</button>
          </div>
          <div className="mt-10">
          <span className="text-brand-color text-lg font-semibold">Contact us through our mails:</span>
           <ol type="1">
             <li className="flex  mt-2">
               General enquiries and hire: <a href="mailto:enquire@vipfleets.io" className="text-brand-color flex items-center ml-2">enquire@vipfleets.io </a>
             </li>
             <li className="flex  mt-2">
             Customer feedback and complaints: <a href="mailto:feedback@vipfleets.io" className="text-brand-color flex items-center ml-2">feedback@vipfleets.io </a>
             </li>
             <li className="flex  mt-2">
             Recruitment and training: <a href="mailto:joinus@vipfleets.io" className="text-brand-color flex items-center ml-2">joinus@vipfleets.io </a>
             </li>
             <li className="flex  mt-2">
             Social Media and Adverts: <a href="mailto:joinus@vipfleets.io" className="text-brand-color flex items-center ml-2">socialmedia@vipfleets.io </a>
             </li>
           </ol>
          </div>
          <div className="mt-10">
          <span className="text-brand-color text-lg font-semibold"> Contact us through our hire line:</span>
           <ol type="1">
             <li className="flex items-center " >
             <IoIosCall/>
                <a href="callto:enquire@vipfleets.io" className=" flex items-center ml-2">08102861988 <span className="ml-2 italic">(MTN) </span></a>
             </li>
             <li className="flex items-center" >
             <IoIosCall/>
             <a href="callto:feedback@vipfleets.io" className=" flex items-center ml-2">07018097044  <span className="ml-2 italic"> (Airtel)</span></a>
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
         <div>
         <span className="text-brand-color text-lg font-semibold">Address:</span>
         <ol type="1">
             <li className="flex mt-2">
         Corporate Head Office
         </li>
         <li className="flex  mt-2">Bakky Plaza Agungi</li>
          <li className="flex mt-2">Lekki Express Way </li>
           <li className="flex mt-2">Lagos, Nigeria</li>
           </ol>
         </div>
         <div className="mt-2">
          <span className="mr-2"> Click here to use google map to get to our Office</span> <button className="lg:ml-5 p-2 mt-2 bg-google text-white-color">Google Map</button>
          </div>
          <div className="mt-10">
          <span className="text-brand-color text-lg font-semibold">
           Contact us through our mails:
           </span>
           <ol type="1">
             <li className="mt-2">
             <div>General enquiries and hire:  </div>
             <div><a href="mailto:enquire@vipfleets.io" className="text-brand-color">enquire@vipfleets.io</a></div>
             </li>
             <li className="mt-2">
             <div>Customer feedback and complaints: </div>
             <div><a href="mailto:feedback@vipfleets.io" className="text-brand-color">feedback@vipfleets.io</a></div>
             </li>
             <li className="mt-2">
             <div>Recruitment and training: </div>
             <div><a href="mailto:joinus@vipfleets.io" className="text-brand-color ">joinus@vipfleets.io</a></div>
             </li>
             <li className="mt-2">
             <div>Social Media and Adverts: </div>
             <div><a href="mailto:joinus@vipfleets.io" className="text-brand-color ">socialmedia@vipfleets.io</a></div>
             </li>
           </ol>
          </div>
          <div className="mt-5">
          <span className="text-brand-color text-lg font-semibold">
           Contact us through our hire line:
           </span>
           <ol type="1">
             <li className="flex items-center " >
             <IoIosCall/>
                <a href="callto:08102861988" className=" flex items-center ml-2">08102861988 <span className="ml-2 italic text-xs">(MTN) </span> </a>
             </li>
             <li className="flex items-center" >
             <IoIosCall/>
             <a href="callto:07018097044" className=" flex items-center ml-2">07018097044 <span className="ml-2 italic text-xs"> (Airtel)</span> </a>
             </li>
            </ol>
          </div>
        </div>
        </div>
        </>
    )
}