"use client";
import { useEffect, useState } from "react";
import { MentorData } from "../Data/Mentor";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useParams } from 'next/navigation';
import Image from "next/image";
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


// Component DetailMentorPage
const MentorDetailPage: React.FC = () => {
    const params = useParams(); // Sử dụng useParams để lấy params

    const id = parseInt(params.mentorSlug as string, 10);


    const [filteredReview, setFilteredReview] = useState<Review[]>([]);
    const [isNewestActive, setIsNewestActive] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // Hàm lọc các review mới nhất (trong vòng 7 ngày)
    const newestReviews = (mentor: Mentor) => {
        const result = mentor.reviews.filter(review => review.date.includes('ngày'));
        setFilteredReview(result);
        setIsNewestActive(true);
    };


    const dataSource: Mentor[] = MentorData as Mentor[];


    const mentor = dataSource.find((mentor) => mentor.id === id);

    useEffect(() => {
        if (mentor) {
            newestReviews(mentor);
        }
    }, [mentor]);


    if (!mentor) {
        return <div className="flex text-5xl text-center text-customBlue min-h-screen items-center justify-center">Không tìm thấy mentor với id: {id}</div>;
    }

    // Tính số lượng đánh giá cho mỗi mức sao
    const starCounts = Array(5).fill(0);
    let totalStars = 0;
    mentor.reviews.forEach(review => {
        starCounts[review.rating - 1] += 1;
        totalStars += review.rating;
    });

    const averageStars = totalStars / mentor.reviews.length || 0;

    // Tạo mảng cho progress với chỉ số sao và số lượng đánh giá
    const progressData = starCounts.map((count, index) => ({ stars: index + 1, count }));

    // Sắp xếp mảng theo số lượng đánh giá giảm dần
    progressData.sort((a, b) => b.stars - a.stars);



    return (
        <NavLayout>
            <div className="flex flex-col lg:flex-row bg-background border-t-2">
                <div className="w-full lg:w-1/6 flex flex-col items-center justify-start p-5">
                    <div className="avatar">
                        <div className="w-30 rounded-full">
                            <Image src={mentor.image} alt={mentor.name} width={700} height={700} />
                        </div>
                    </div>
                    <h1 className="text-4xl text-customBlue font-semibold break-words text-center">{mentor.name}</h1>
                    <p className="text-3xl text-customBlue italic break-words text-center mb-2">{mentor.career}</p>
                    <div className="flex flex-col bg-secondary rounded-3xl p-3 space-y-2 items-center">
                        <p className="text-white font-semibold">{mentor.pricing.toLocaleString('vi-vn')}/giờ</p>
                        <Link href={`/services/${id}/book`} className="rounded-full bg-white text-customBlue font-semibold px-3">Book Now</Link>
                    </div>
                </div>
                <div className="w-full lg:w-5/6 bg-background py-5 px-5 lg:px-20 text-customBlue">
                    <p dangerouslySetInnerHTML={{ __html: mentor.about }}></p>
                    <div className="border-y-2 border-customBlue pt-4 pb-2 mt-4 flex flex-wrap items-start space-x-2">
                        {mentor.badges.map((badge, index) => (
                            <p key={index} className="bg-base-300 rounded-full p-1 w-fit mb-2">{badge}</p>
                        ))}
                    </div>

                    {/* Phần Đánh giá và Nhận xét */}
                    <div className="mt-8">
                        <h2 className="text-3xl text-customBlue font-bold mb-4">Đánh giá và Nhận xét</h2>

                        {/* Hiển thị số sao trung bình và thanh progress cho mỗi mức sao */}
                        <div className="mt-8 bg-white rounded-3xl w-full lg:w-1/2">
                            <div className="flex items-end p-2">
                                <h3 className="text-4xl text-customBlue font-bold">{averageStars.toFixed(1)} ⭐ </h3>
                                <h3>{mentor.reviews.length} đánh giá</h3>
                            </div>
                            <div className="h-2 bg-background"></div>
                            {progressData.map((data) => (
                                <div key={data.stars} className="flex items-center mb-2 text-customBlue px-5">
                                    <span className="mr-2">{data.stars}</span>
                                    <progress className="progress progress-warning" value={data.count} max={mentor.reviews.length}></progress>
                                </div>
                            ))}
                        </div>

                        <div className="space-x-4 mt-4">
                            <button
                                className={`py-2 px-4 bg-white text-customBlue rounded-full text-xl font-bold ${isNewestActive ? 'opacity-100' : 'opacity-60'}`}
                                onClick={() => newestReviews(mentor)}>
                                Mới nhất
                            </button>
                            <button
                                className={`py-2 px-8 bg-white text-customBlue rounded-full text-xl font-bold ${isNewestActive ? 'opacity-60' : 'opacity-100'}`}
                                onClick={() => {
                                    setFilteredReview([]);
                                    setIsNewestActive(false);
                                }}>
                                Tất cả
                            </button>
                        </div>

                        <div>
                            {(filteredReview.length > 0 ? filteredReview : mentor.reviews).map((review) => (
                                <div key={review.id} className="py-4 flex space-x-4 flex-row">
                                    <div className="avatar h-fit">
                                        <div className="bg-base-200 rounded-full">
                                            <FaUser size={30} className="text-black" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-between">
                                            <div className="flex space-x-2">
                                                <h3 className="font-semibold text-customBlue">{review.name}</h3>
                                                <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-400">{review.date}</p>
                                            </div>
                                        </div>

                                        <p className="text-customBlue">{review.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </NavLayout>
    );
}


export default MentorDetailPage;