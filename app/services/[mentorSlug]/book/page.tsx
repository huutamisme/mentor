"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { vi } from "date-fns/locale";
import { MentorData } from "@/app/services/Data/Mentor";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { format, parse, addHours } from "date-fns";
import { Voucher } from "@/app/services/Data/Voucher";
import { toast, ToastContainer } from 'react-toastify';
import NavLayout from "@/app/NavLayout";

// Định nghĩa kiểu cho đánh giá
interface Review {
    id: number;
    name: string;
    comment: string;
    rating: number;
    date: string;
}

// Định nghĩa kiểu cho mentor
interface Mentor {
    id: number;
    name: string;
    image: string;
    career: string;
    pricing: number;
    about: string;
    field: string;
    badges: string[];
    period: string[];
    reviews: Review[];
}

const BookMentorPage: React.FC = () => {
    const [duration, setDuration] = useState<number>(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [timeSlot, setTimeSlot] = useState<string>("");
    const [discountCode, setDiscountCode] = useState<string>("");
    const [discountValue, setDiscountValue] = useState<number>(0);
    const router = useRouter();
    const params = useParams(); // Sử dụng useParams để lấy params
    const id = parseInt(params.mentorSlug as string, 10);

    const [timeLeft, setTimeLeft] = useState<number>(10);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Countdown timer
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            toast.warning("Thời gian giữ lịch hẹn đã hết!");
            setTimeout(() => {
                router.push('/services'); // Redirecting to services
            }, 2500);
        }
        return () => clearInterval(timer);
    }, [timeLeft, router]);

    const dataSource: Mentor[] = MentorData as Mentor[];

    const mentor = dataSource.find((mentor) => mentor.id === id); // Parsing ID
    if (!mentor) {
        return <div className="flex text-5xl text-center text-customBlue min-h-screen items-center justify-center">Không tìm thấy mentor với id: {id}</div>;
    }

    const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setDuration(parseInt(e.target.value));
    };

    const handleTimeSlotChange = (time: string) => {
        setTimeSlot(time);
    };

    const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Only allow uppercase letters and numbers
        setDiscountCode(value);
    };

    const applyDiscountCode = () => {
        const voucher = Voucher.find(v => v.code === discountCode); // Find matching voucher
        if (voucher) {
            setDiscountValue(voucher.value); // Apply discount value
        } else {
            setDiscountValue(0); // No discount if invalid
            toast.error('Mã giảm giá không hợp lệ!');
        }
        setDiscountCode("");
    };

    const mentorPrice = duration * mentor.pricing;
    const vatPrice = (mentorPrice * 10) / 100;
    const discountPrice = (discountValue / 100) * (mentorPrice + vatPrice);
    const totalPrice = mentorPrice + vatPrice - discountPrice;

    const calculateEndTime = () => {
        if (!timeSlot) return "";
        const time = parse(timeSlot, "h:mma", new Date());
        const endTime = addHours(time, duration);
        return format(endTime, "h:mma");
    };

    const formatSelectedDate = (date: Date | null) => {
        if (!date) return "Chưa chọn ngày!";
        const dayOfWeek = format(date, 'eeee', { locale: vi });
        const day = format(date, 'd');
        const month = format(date, 'MM');
        const year = format(date, 'yyyy');
        return `${dayOfWeek}, ngày ${day}/${month}/${year}`;
    };

    const handleConfirmBooking = () => {
        toast.success("Đặt lịch hẹn thành công!");
        setTimeout(() => {
            router.push('/services');
        }, 2500);
    };

    return (
        <NavLayout>
            <div className="block md:flex bg-background min-h-screen p-10 md:space-x-10">
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div className="w-full md:w-1/2 p-5 bg-gradient-custom shadow-lg rounded-lg mb-3 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4 text-white">Chọn Thông Tin Đặt Lịch</h2>

                    <div className="mb-6">
                        <label className="text-xl text-white font-semibold">Chọn Thời Lượng (giờ):</label>
                        <select
                            className="block w-full p-2 mt-2 border border-gray-300 rounded text-black"
                            value={duration}
                            onChange={handleDurationChange}
                        >
                            <option value={1}>1 giờ</option>
                            <option value={2}>2 giờ</option>
                            <option value={3}>3 giờ</option>
                        </select>
                    </div>

                    <div className="mb-6 space-x-4">
                        <label className="text-xl font-semibold text-white">Chọn Ngày:</label>
                        <div className="flex justify-center">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                locale={vi}
                                minDate={new Date()}
                                inline
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="text-xl font-semibold text-white">Chọn Khung Giờ:</label>
                        <div className="pt-4 pb-2 mt-4 flex space-x-4 flex-wrap items-start">
                            {mentor.period.map((time, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleTimeSlotChange(time)}
                                    className={`${timeSlot === time
                                        ? "border-4 border-blue-500"
                                        : "border-4 border-transparent"
                                        } bg-white text-customBlue font-semibold rounded-full py-1 px-5 w-fit mb-2 text-2xl`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg">
                    <div className="flex items-center space-x-4 border-b-2 p-5">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={mentor.image} alt={mentor.name} />
                            </div>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-customBlue">Tư vấn với {mentor.name}</p>
                            <p className="text-customBlue">Giữ lịch hẹn trong {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
                        </div>
                    </div>
                    <div className="border-b-2 p-5">
                        <div className="mb-4 flex justify-between">
                            <p className="text-2xl font-bold text-customBlue">{duration} giờ</p>
                            <p className="text-2xl font-bold text-customBlue">{mentorPrice.toLocaleString('vi-vn')} VND</p>
                        </div>

                        <div className="mb-4">
                            <p className="text-2xl text-customBlue">{formatSelectedDate(selectedDate)}</p>
                        </div>

                        <div className="mb-4">
                            <p className="text-2xl text-customBlue">{timeSlot ? `${timeSlot} - ${calculateEndTime()}` : "Chưa chọn khung giờ!"}</p>
                        </div>

                        {/* Discount Code Input */}
                        <div className="flex items-center space-x-2 mb-6 border border-2 border-black rounded-full">
                            <input
                                type="text"
                                value={discountCode}
                                onChange={handleDiscountChange}
                                placeholder="Nhập mã giảm giá"
                                className="w-2/3 p-2 rounded-full text-customBlue text-center focus:outline-none"
                            />
                            <button
                                onClick={applyDiscountCode}
                                className="w-1/3 bg-customBlue text-white p-2 rounded font-semibold rounded-r-full"
                            >
                                Áp dụng
                            </button>
                        </div>
                    </div>

                    <div className="text-customBlue px-10 space-y-4 py-4">
                        <div className="flex justify-between">
                            <h3 className="text-2xl">Phí tư vấn: </h3>
                            <h3 className="text-2xl">{mentorPrice.toLocaleString('vi-VN')} VND</h3>
                        </div>
                        <div className="flex justify-between">
                            <h3 className="text-2xl">VAT (10%): </h3>
                            <h3 className="text-2xl">{vatPrice.toLocaleString('vi-VN')} VND</h3>
                        </div>
                        {discountValue !== 0 &&
                            <div className="flex justify-between">
                                <h3 className="text-2xl">Mã giảm giá ({discountValue}%):</h3>
                                <h3 className="text-2xl">{discountPrice.toLocaleString('vi-VN')} VND</h3>
                            </div>
                        }
                        <div className="flex justify-between">
                            <h3 className="text-2xl font-bold">Tổng cộng: </h3>
                            <h3 className="text-2xl font-bold">{totalPrice.toLocaleString('vi-VN')} VND</h3>
                        </div>

                        <button
                            className={`mt-6 w-full p-3 text-white font-bold text-lg rounded-lg ${!selectedDate || !timeSlot ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                                }`}
                            disabled={!selectedDate || !timeSlot}
                            onClick={handleConfirmBooking}
                        >
                            Xác nhận và Đặt lịch
                        </button>
                    </div>
                </div>
            </div>
        </NavLayout>
    );
}

export default BookMentorPage;
