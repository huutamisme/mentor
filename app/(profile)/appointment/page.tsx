"use client";

import ProfileLayout from "../ProfileLayout";
import Image from "next/image";
import { FaCalendarCheck } from "react-icons/fa";
import { useRef, useState } from "react";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Review {
    isValid: boolean,
    id: number,
    rating: number,
    comment: string
}

interface Mentor {
    id: number,
    avatar: string,
    name: string,
    field: string,
    career: string
}

interface Appointment {
    id: number,
    mentor: Mentor,
    date: string,
    timeSlot: string,
    review: Review
}

const appointments: Appointment[] = [
    {
        id: 1,
        mentor: {
            id: 1,
            avatar: "/capy.jpg",
            name: "Faker",
            field: "career",
            career: "Digital Manager"
        },
        date: "01/11/2024",
        timeSlot: "9:00 - 11:00",
        review: {
            isValid: false,
            id: 0,
            rating: 0,
            comment: ""
        }
    },
    {
        id: 2,
        mentor: {
            id: 2,
            avatar: "/capy.jpg",
            name: "Faker",
            field: "mock",
            career: "Digital Manager"
        },
        date: "08/11/2024",
        timeSlot: "9:00 - 11:00",
        review: {
            isValid: false,
            id: 0,
            rating: 0,
            comment: ""
        }
    },
    {
        id: 3,
        mentor: {
            id: 3,
            avatar: "/capy.jpg",
            name: "Keria",
            field: "project",
            career: "Digital Manager"
        },
        date: "07/11/2024",
        timeSlot: "13:30 - 17:00",
        review: {
            isValid: false,
            id: 0,
            rating: 0,
            comment: ""
        }
    },
    {
        id: 4,
        mentor: {
            id: 4,
            avatar: "/capy.jpg",
            name: "Oner",
            field: "project",
            career: "Digital Manager"
        },
        date: "01/11/2024",
        timeSlot: "9:00 - 11:00",
        review: {
            isValid: true,
            id: 4,
            rating: 5,
            comment: "Mentor có 2 cup Worlds"
        }
    },
]

const Appointment: React.FC = () => {

    const modalRef = useRef<HTMLDialogElement>(null);
    const [currentAppointment, setCurrentAppointment] = useState<Appointment | null>(null);


    const getAppointmentStatus = (date: string, timeSlot: string) => {
        const [day, month, year] = date.split('/');
        const [startTime, endTime] = timeSlot.split(' - ');

        const [hour, minute] = startTime.split(':').map(part => part.padStart(2, '0'));
        const [endHour, endMinute] = endTime.split(':').map(part => part.padStart(2, '0'));


        const appointmentStart = new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
        const appointmentEnd = new Date(`${year}-${month}-${day}T${endHour}:${endMinute}:00`);

        // Get the current date and time
        const currentDateTime = new Date();

        if (currentDateTime < appointmentStart) {
            return "Sắp diễn ra"; // Upcoming
        } else if (currentDateTime >= appointmentStart && currentDateTime <= appointmentEnd) {
            return "Đang diễn ra"; // In Progress
        } else {
            return "Đã kết thúc"; // Past
        }
    };


    const openModal = (appointment: Appointment) => {
        setCurrentAppointment(appointment);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    const formik = useFormik({
        initialValues: {
            rating: 5,
            comment: ""
        },
        onSubmit: (values) => {
            console.log("Submitted values:", values);
            toast.success("Đánh giá thành công!");
            closeModal();
            formik.resetForm();
        }
    });

    return (
        <ProfileLayout>
            <div className="mb-10">
                <h1 className="text-4xl text-customBlue font-semibold">Lịch hẹn</h1>
            </div>

            <div className="bg-gray-500 rounded-3xl p-10 bg-opacity-25 grid grid-col-1 xl:grid-cols-2 gap-4">
                {appointments.length === 0 ?
                    <h2 className="text-3xl text-center text-customBlue">Chưa có lịch hẹn nào!</h2>
                    :
                    appointments.map((appointment, index) => (
                        <div key={index}>
                            <ul className="timeline text-customBlue">
                                <li className="w-full">
                                    <hr />
                                    <div className="timeline-start">{appointment.date}</div>
                                    <div className="timeline-middle">
                                        <FaCalendarCheck />
                                    </div>
                                    <hr />
                                </li>
                            </ul>

                            <div className="card card-side bg-base-100 shadow-xl text-customBlue">
                                <figure className="w-1/3">
                                    <Image
                                        src={appointment.mentor.avatar}
                                        alt="Mentor Avatar"
                                        width={200}
                                        height={200}
                                        className="object-cover h-full w-full"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Tư vấn cùng {appointment.mentor.name}
                                        {
                                            getAppointmentStatus(appointment.date, appointment.timeSlot) === "Đã kết thúc" ?
                                                <div className="badge bg-gray-400 text-white">Đã kết thúc</div> :
                                                getAppointmentStatus(appointment.date, appointment.timeSlot) === "Đang diễn ra" ?
                                                    <div className="badge bg-green-500 text-white">Đang diễn ra</div>
                                                    : <div className="badge bg-yellow-600 text-white">Sắp diễn ra</div>
                                        }
                                    </h2>
                                    <p>{appointment.mentor.career}</p>
                                    <p><strong>Lĩnh vực:</strong> {appointment.mentor.field === "mock" ? "Phỏng vấn giả định" : appointment.mentor.field === "career" ? "Tư vấn nghề nghiệp" : "Tư vấn hỗ trợ dự án"}</p>
                                    <p><strong>Khung giờ: </strong> {appointment.timeSlot} </p>
                                    <div className="card-actions justify-end">
                                        <button
                                            disabled={getAppointmentStatus(appointment.date, appointment.timeSlot) === "Sắp diễn ra"}
                                            className="bg-customBlue text-white hover:bg-blue-500 btn"
                                            onClick={() => openModal(appointment)}
                                        >
                                            {appointment.review.isValid ? "Xem đánh giá" : "Đánh giá"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            <dialog ref={modalRef} id="my_modal_2" className="modal text-customBlue">
                <div className="modal-box">
                    {currentAppointment?.review.isValid ? (
                        // Show existing review details if already reviewed
                        <div>
                            <h3 className="font-bold text-3xl border-b-2">Đánh giá của bạn</h3>
                            <div className="flex justify-center mt-4">
                                {[...Array(currentAppointment.review.rating)].map((_, i) => (
                                    <span key={i} className="text-2xl">⭐</span>
                                ))}

                            </div>
                            <p className="mt-4">{currentAppointment.review.comment}</p>
                            <div className="modal-action">
                                <button
                                    onClick={closeModal}
                                    className="btn bg-gray-400 text-white"
                                >
                                    Đóng
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Show form to submit a new review
                        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
                            <h3 className="font-bold text-3xl border-b-2">Đánh giá sau buổi tư vấn</h3>
                            <div className="rating justify-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <input
                                        key={star}
                                        type="radio"
                                        name="rating"
                                        value={star}
                                        className="mask mask-star-2 bg-yellow-400"
                                        checked={formik.values.rating === star}
                                        onChange={() => formik.setFieldValue("rating", star)}
                                    />
                                ))}
                            </div>
                            <textarea
                                name="comment"
                                placeholder="Đánh giá của bạn về buổi phỏng vấn"
                                className="input input-bordered"
                                value={formik.values.comment}
                                onChange={formik.handleChange}
                            />
                            <div className="modal-action">
                                <button
                                    type="button"
                                    onClick={() => {
                                        formik.resetForm();
                                        closeModal();
                                    }}
                                    className="btn bg-gray-400 text-white"
                                >
                                    Đóng
                                </button>
                                <button type="submit" className="btn bg-customBlue text-white hover:bg-blue-600">
                                    Gửi
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


            {/* Toast */}
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </ProfileLayout>
    );
}

export default Appointment;
