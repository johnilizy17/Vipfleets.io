import React from 'react';
import Image from 'next/image'

export default function loading(){
    return(
        <div className="h-screen w-screen fixed -mt-10 z-50 bg-white-color flex flex-col justify-center items-center">
        <div className="animate-bounce">
         <Image src='/favicon.ico' alt="loading" width={100} height={100}  />
        </div>
        <div className="font-bold text-2xl text-brand-color">Loading <span className="animate-ping"> .......</span></div>
        </div>
    )
}