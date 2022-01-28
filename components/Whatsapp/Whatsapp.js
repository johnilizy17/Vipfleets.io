
import Lottie from 'react-lottie-player'
import WhatsappLoading from '../../asset/whatsapp.json'

export default function Whatsapp(){
    return(
    <a href="https://wa.me/+2348130289290">
        <Lottie
        loop
        animationData={WhatsappLoading}
        play
        className="sm:w-20 sm:h-20 lg:w-40 lg:h-40"
    />
    </a>
    )

}