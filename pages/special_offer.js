import React, { useState } from 'react'
import Navbar from '../components/Header/Navbar';
import News from '../components/home/News';
import lagos from '../asset/lagos.jpg'
import Image from 'next/image'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Loading from '../components/Loading';
import * as Yup from 'yup';

export default function special_offer() {

    const pagechanger = false

    function handleSubmit(x){
        const pagechanger =true
        axios({
			method: 'post',
			url: ' https://pure-crag-36612.herokuapp.com/api/auth/register',
			header: {
				"accept": "application/json",
				"Content-Type": "application/json"
			},
			data: {
				"FullName": x.FullName,
				"TelephoneNumber": x.TelephoneNumber,
				"City": "City",
				"Email": x.Email
			}
		}).then((res) => {
			if (res.data === "user not found" || res.data === "wrong password") {
                alert("Email already registered")
                setpagechanger(false)
			} else {
				console.log(res.data)
				setClicked(true)
                alert.show("successful")
                setpagechanger(false)
			}
		}).catch((err) => {
			alert.show("Please complete all the form")
		})
    }

    return (
        <>
        {pagechanger ? <Loading/> :
        <div className="font-serif">
            <Navbar />
            <div className="lg:flex">
            <div className="lg:basis-2/4 h-50">
                    <Image src={lagos} alt="Lagos city" height={1200} object-fit="contain" layout="responsive" />
                </div>
                <div className="basis-2/4 p flex justify-center items-center">
                    <Formik
                        initialValues={{ email: "", password: "", first: "", last: "", role: "", confirm: "", checkbox: "" }}
                        validationSchema={Yup.object({
                            first: Yup.string().required("Required"),
                            last: Yup.string().required("Required"),
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
                                        <Field style={{width:350}} className=" rounded-md form-control py-3 px-4 border-black border-2 block mt-4" type="first" name="first" placeholder="First Name" />
                                        <div style={{ color: "red" }}>
                                            <ErrorMessage name="first" />
                                        </div>
                                        <Field style={{width:350}} className=" rounded-md form-control py-3 px-4 border-black border-2 block mt-4" type="last" name="last" placeholder="Last Name" />
                                        <div style={{ color: "red" }}>
                                            <ErrorMessage name="last" />
                                        </div>
                                        <Field style={{width:350}} className=" rounded-md form-control py-3 px-4 border-black border-2 block mt-4" type="email" name="email" placeholder="Email" />
                                        <div style={{ color: "red" }}>
                                            <ErrorMessage name="email" />
                                        </div>
                                    </div>
                                    <div className=" mt-5 xl:mt-8 text-center xl:text-left">
                                        <button className="rounded-md bg-brand-color py-3 px-4 w-full xl:w-32 xl:mr-3 text-white-color align-top" type="submit">Sumbit</button>
                                        </div>
                                        <div className="text-xs mt-2 text-footer text-left" style={{width:350}}>
                                        Please fill out this form in order to receive SPECIAL DISCOUNTS and PROMOTIONAL OFFERS from VIP FLEETS
                                        </div>
                                        <div className="text-xs mt-2 text-footer text-left" style={{width:350}}>
                                        For a quick quotation send a mail to <a href="mailto:enquiry@vipfleets.io" className="text-brand-color"> enquiry@vipfleets.io </a>
                                        </div>
                                </form>
                            )}
                    </Formik>
                </div>
            </div>
            <div className="mt-5">
            <News/>
            </div>
        </div>}
        </>
    )
}