"use client"
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage: React.FC = () => {
    const [zoomLevel, setZoomLevel] = useState(1);
    const [mapImage, setMapImage] = useState('map-small.png');

    // Validation schema using Yup
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string()
            .required('Phone is required')
            .matches(/^[0-9]+$/, 'Phone must be only numbers')
            .min(10, 'Phone number must be at least 10 digits'),
        resume: Yup.string().required('Resume link is required'),
        message: Yup.string().required('Message is required'),
    });

    // Formik form setup with TypeScript typing
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            resume: '',
            message: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form values', values);
            formik.resetForm();
            toast.success('Form submitted successfully!');
        },
    });

    useEffect(() => {
        // Update map image based on zoom level
        switch (zoomLevel) {
            case 1:
                setMapImage('map-small.png');
                break;
            case 2:
                setMapImage('map-medium.png');
                break;
            case 3:
                setMapImage('map-large.png');
                break;
            default:
                setMapImage('map-small.png');
        }
    }, [zoomLevel]);

    // Event handlers for map zoom
    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault();
        setZoomLevel((prev) => (e.deltaY < 0 ? Math.min(prev + 1, 3) : Math.max(prev - 1, 1)));
    };

    const handleMouseEnter = () => {
        document.body.style.overflow = 'hidden';
    };

    const handleMouseLeave = () => {
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="flex flex-col items-center bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-custom p-6 w-full">
                    <p className="text-background text-5xl mb-5 font-semibold">Contact us</p>
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="mr-3 bg-gray-300 p-2 rounded-full" size={50} />
                        <p className="text-background text-2xl">(+84) 028.12345678</p>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="mr-3 bg-gray-300 p-2 rounded-full" size={50} />
                        <p className="text-background text-2xl">mentor.support@gmail.com</p>
                    </div>
                    <div className="flex items-start">
                        <FaMapMarkerAlt className="mr-3 bg-gray-300 p-2 rounded-full" size={50} />
                        <p className="text-background text-2xl">
                            495 Cach Mang Thang St., W.13, Dist. Binh Thanh, HCMC, <br />
                            Vietnam.
                        </p>
                    </div>
                </div>
                <div className="px-6 pt-6 w-full">
                    <p className="text-customBlue text-5xl mb-5 font-semibold">Our office</p>
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onWheel={handleWheel}
                        className="relative w-full h-96 overflow-hidden"
                    >
                        <img
                            src={mapImage}
                            alt="Map"
                            className={`w-full h-full transition-transform duration-500 ease-in-out transform scale-${zoomLevel}`}
                        />
                    </div>
                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <div className="mt-5 w-full md:w-1/2">
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div className="space-y-4 bg-gradient-custom px-10 py-5">
                        <p className="text-5xl text-white font-bold">Contact us</p>

                        {/* Name */}
                        <div className={`grid grid-cols-3 gap-4 w-full p-2 rounded-full text-customBlue font-semibold items-center bg-white border ${formik.touched.name && formik.errors.name ? 'border-red-500 border-4' : 'border-gray-300'}`}>
                            <label htmlFor="name" className="block text-xl col-span-1">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Write Your Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className="col-span-2 border-none focus:outline-none"
                            />
                        </div>
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-red-500 text-lg text-center">{formik.errors.name}</div>
                        )}

                        {/* Email */}
                        <div className={`grid grid-cols-3 gap-4 w-full p-2 rounded-full text-customBlue font-semibold items-center bg-white border ${formik.touched.email && formik.errors.email ? 'border-red-500 border-4' : 'border-gray-300'}`}>
                            <label htmlFor="email" className="block text-xl col-span-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Write Your Email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="col-span-2 border-none focus:outline-none"
                            />
                        </div>
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-500 text-lg text-center">{formik.errors.email}</div>
                        )}

                        {/* Phone */}
                        <div className={`grid grid-cols-3 gap-4 w-full p-2 rounded-full text-customBlue font-semibold items-center bg-white border ${formik.touched.phone && formik.errors.phone ? 'border-red-500 border-4' : 'border-gray-300'}`}>
                            <label htmlFor="phone" className="block text-xl col-span-1">Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Write Your Phone Number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                className="col-span-2 border-none focus:outline-none"
                            />
                        </div>
                        {formik.touched.phone && formik.errors.phone && (
                            <div className="text-red-500 text-lg text-center">{formik.errors.phone}</div>
                        )}

                        {/* Resume Link */}
                        <div className={`grid grid-cols-3 gap-4 w-full p-2 rounded-full text-customBlue font-semibold items-center bg-white border ${formik.touched.resume && formik.errors.resume ? 'border-red-500 border-4' : 'border-gray-300'}`}>
                            <label htmlFor="resume" className="block text-xl col-span-1">Resume</label>
                            <input
                                id="resume"
                                name="resume"
                                type="text"
                                placeholder="Link To Your Resume"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.resume}
                                className="col-span-2 border-none focus:outline-none"
                            />
                        </div>
                        {formik.touched.resume && formik.errors.resume && (
                            <div className="text-red-500 text-lg text-center">{formik.errors.resume}</div>
                        )}

                        {/* Message */}
                        <div className={`grid grid-cols-3 gap-4 w-full p-2 rounded-full text-customBlue font-semibold items-center bg-white border ${formik.touched.message && formik.errors.message ? 'border-red-500 border-4' : 'border-gray-300'}`}>
                            <label htmlFor="message" className="block text-xl col-span-1">Message</label>
                            <input
                                id="message"
                                name="message"
                                type="text"
                                placeholder="Write Your Message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                className="col-span-2 border-none focus:outline-none"
                            />
                        </div>
                        {formik.touched.message && formik.errors.message && (
                            <div className="text-red-500 text-lg text-center">{formik.errors.message}</div>
                        )}
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-center">
                        <button type="submit" className="btn bg-gradient-custom text-white text-2xl rounded-full w-1/4">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
