import React, { useState } from 'react'
import Navbar from '../components/Header/Navbar';
import teamspicture from '../asset/business.jpg';
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Dropzone from 'react-dropzone'
import News from '../components/home/News'
import { Card } from "@mui/material";
import Avarter from '../asset/Avarter.jpg';
import * as Yup from 'yup';
import {AiOutlineCloudUpload} from 'react-icons/ai'
export default function Teams() {

    const [fieldValue, setFieldValue] = useState()

    function handleSubmit(a) {
        console.log(a)
        console.log(fieldValue)
    }


    return (
        <>
            <div className="font-serif w-screen pb-5">
                <Navbar />
                <Image src={teamspicture} alt="the teams image" />
                <div className=" text-white-color lg:ml-20 sm:ml-5  relative lg:bottom-40 sm:bottom-32">
                    <div className="font-semibold lg:text-3xl sm:text-2xl">
                        Partnership
              </div>
                    <div className="text-xl">
                        {"Partner helps businesses like yours to achieve long-term success"}
                    </div>
                </div>
                <div className=" lg:ml-20 relative lg:bottom-20 sm:bottom-20 lg:pt-10 lg:mr-20 sm:ml-5 sm:mr-5">
                    <div className="lg:basis-2/6">
                        Want to partner with us? List your vehicle with VIP FLEETS. You can easily make back the value of your vehicle in a year.
             </div>
                    <div className="lg:basis-2/6 lg:mt-2 sm:mt-2">
                        Partner with us today and you could be earning up to N500K per month on your vehicle.
            </div>
                    <div className="flex justify-center mt-5">
                        <Card className="w-4/5 p-10 ">
                            <center>
                            </center>
                            <center>
                                <Formik
                                    initialValues={{ email: "", number: "", year: "", purchase: "", model: "", color: "", mileage: "", first: "" }}
                                    validationSchema={Yup.object({
                                        first: Yup.string().required("Full Name is Required"),
                                        number: Yup.string().required("Number is Required"),
                                        year: Yup.string().required("Year is Required"),
                                        purchase: Yup.string().required("Purchase is Required"),
                                        model: Yup.string().required("Model is Required"),
                                        color: Yup.string().required("Colour is Required"),
                                        mileage: Yup.string().required("Mileage is Required"),
                                        // image: Yup.string().required("Image is Required"),
                                        email: Yup.string().email('invalid email address').required('Required'),
                                    })}

                                    onSubmit={(values, { setSubmitting }) => {
                                        handleSubmit(values)
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                    }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div>
                                                    <Field className=" rounded-md sm:w-full lg:w-2/4 form-control py-3 px-4 border-black border-2 block mt-4" type="first" name="first" placeholder="Full Name" />
                                                    <div className="sm:w-full lg:w-2/4" style={{ color: "red" }}>
                                                        <ErrorMessage name="first" />
                                                    </div>
                                                    <Field className=" rounded-md sm:w-full lg:w-2/4 form-control py-3 px-4 border-black border-2 block mt-4" type="number" name="number" placeholder="Contact number" />
                                                    <div className="sm:w-full lg:w-2/4" style={{ color: "red" }}>
                                                        <ErrorMessage name="number" />
                                                    </div>
                                                    <Field className=" rounded-md sm:w-full lg:w-2/4 form-control py-3 px-4 border-black border-2 block mt-4" type="year" name="year" placeholder="Year of car" />
                                                    <div className="sm:w-full lg:w-2/4" style={{ color: "red" }}>
                                                        <ErrorMessage name="year" />
                                                    </div>
                                                    <Field className=" rounded-md sm:w-full lg:w-2/4 form-control py-3 px-4 border-black border-2 block mt-4" type="purchase" name="purchase" placeholder="Purchase year" />
                                                    <div className="sm:w-full lg:w-2/4" style={{ color: "red" }}>
                                                        <ErrorMessage name="purchase" />
                                                    </div>
                                                    <Field className=" rounded-md sm:w-full lg:w-2/4 form-control py-3 px-4 border-black border-2 block mt-4" type="model" name="model" placeholder="Model" />
                                                    <div className="sm:w-full lg:w-2/4" style={{ color: "red" }}>
                                                        <ErrorMessage name="model" />
                                                    </div>
                                                    <Field className=" rounded-md sm:w-full lg:w-2/4 form-control py-3 px-4 border-black border-2 block mt-4" type="text" name="color" placeholder="Color" />
                                                    <div className="sm:w-full lg:w-2/4" style={{ color: "red" }}>
                                                        <ErrorMessage name="color" />
                                                    </div>
                                                    <Field className=" rounded-md sm:w-full lg:w-2/4 form-control py-3 px-4 border-black border-2 block mt-4" type="text" name="mileage" placeholder="Mileage" />
                                                    <div className="sm:w-full lg:w-2/4" style={{ color: "red" }}>
                                                        <ErrorMessage name="mileage" />
                                                    </div>

                                                    <Field className=" rounded-md sm:w-full lg:w-2/4 form-control py-3 px-4 border-black border-2 block mt-4" type="email" name="email" placeholder="Email" />
                                                    <div className="sm:w-full lg:w-2/4" style={{ color: "red" }}>
                                                        <ErrorMessage name="email" />
                                                    </div>
                                                    <Dropzone onDrop={acceptedFiles => acceptedFiles.map(d=>{
                                                        console.log(d.preview)
                                                    })
                                                    
                                                    }>
                                                        {({ getRootProps, getInputProps }) => (
                                                            <section>
                                                                <div {...getRootProps()}>
                                                                    <input {...getInputProps()} />
                                                                    <div className="border-2 flex justify-center items-center h-40 mt-5">
                                                                              <div> Drag or drop image or click to upload image  </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        )}
                                                    </Dropzone>
                                                 <Image src={Avarter} alt="the uploaded image"/>
                                                </div>
                                                <div className=" mt-5 xl:mt-8 text-center xl:text-left">
                                                    <button className="rounded-md bg-brand-color sm:w-full lg:w-2/4 py-3 px-4 w-full xl:w-32 xl:mr-3 text-white-color align-top" type="submit">Sumbit</button>
                                                </div>

                                                <div className="text-xs mt-2 text-footer">
                                                    (Once form has been submitted, a member of our team will be in contact with you)
                                                </div>
                                            </form>
                                        )}
                                </Formik>
                            </center>

                        </Card>
                    </div>
                </div>
            </div>
            <News />
        </>
    )
}