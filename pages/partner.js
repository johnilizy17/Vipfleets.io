import React, { useState, useEffect } from 'react'
import Navbar from '../components/Header/Navbar';
import teamspicture from '../asset/business.jpg';
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Dropzone from 'react-dropzone'
import News from '../components/home/News'
import { Card } from "@mui/material";
import Avarter from '../asset/Avarter.jpg';
import * as Yup from 'yup';
import { AiOutlineCloudUpload } from 'react-icons/ai'
import Preview from '../components/home/Preview'
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

export default function Teams() {

    const [fieldValue, setFieldValue] = useState([])
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);


    function handleSubmit(a) {
        console.log(a)
        console.log(fieldValue)
    }


    return (
        <>
            <div className="font-serif w-screen pb-5">
                <Navbar />
                <Image src={teamspicture} alt="the teams image" />
                <center className=" text-white-color lg:ml-20 sm:ml-5 sm:mb-3  relative lg:bottom-40 sm:bottom-32">
                    <div className="font-semibold lg:text-3xl sm:text-2xl">
                        PARTNERSHIP
              </div>
                    <div className="lg:text-2xl text-center">
                        {"Partner helps businesses like yours to achieve long-term success"}
                    </div>
                </center>
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
                                                    <div className="border-2 flex justify-center items-center sm:h-40 lg:h-80 mt-5">
                                                       {files.length < 1 && <div {...getRootProps({ className: 'dropzone' })}>
                                                            <input {...getInputProps()} />
                                                            <p>{"Drag or drop a image here, or click to select a image "}</p>
                                                        </div>}


                                                        {files.length > 0 && files.map(file => (
                                                            <div key={file.name} className="flex justify-center items-center">
                                                                <div className="lg:w-40 lg:h-40" >
                                                                    <img
                                                                        src={file.preview}
                                                                
                                                        
                                                                    />
                                                                </div>
                                                            </div>))}
                                                    </div>
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