"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SlickBtn";
import Link from "next/link";
import Image from "next/image";


interface BannerProps {
    margin: number
}

interface Mentor {
    img: string;
    name: string;
    career: string;
    quote: string;
    url: string;
    booking: string;
}

const mentors: Mentor[] = [
    {
        img: "/MockInterview/AnnaHuynh.png",
        name: "Anna Huỳnh",
        career: "HR executive",
        quote: "Tôi là Anna Huỳnh, đảm nhận vị trí HR Executive tại Công ty TNHH Daiko với 5 năm kinh nghiệm. Tôi đã đồng hành cùng nhiều ứng viên, đặc biệt là các bạn trẻ có đam mê với lĩnh vực Digital Marketing và Content Creation...",
        url: "/services/1",
        booking: "/services/1/book"
    },
    {
        img: "/CareerAdvise/MinhMan.png",
        name: "Minh Mẫn",
        career: "Senior Marketing Manager",
        quote: "Tôi là Minh Mẫn, là một Senior Marketing Manager với hơn 7 năm kinh nghiệm làm việc tại các công ty đa quốc gia và doanh nghiệp khởi nghiệp. Nổi bật với sự sáng tạo trong tư duy chiến lược, khả năng lãnh đạo và chuyên môn sâu rộng về Digital Marketing...",
        url: "/services/7",
        booking: "/services/7/book"
    },
    {
        img: "/ProjectAdvise/DavidNguyen.png",
        name: "David Nguyễn",
        career: "Brand Manager",
        quote: "Với hơn 10 năm kinh nghiệm dày dạn trong lĩnh vực quản lý thương hiệu và đồng hành cùng nhiều startup thành công. Tôi đã có cơ hội làm việc với các thương hiệu lớn nhỏ, từ giai đoạn xây dựng thương hiệu ban đầu cho đến khi trở thành những cái tên được nhiều người biết đến...",
        url: "/services/13",
        booking: "/services/13/book"
    }
]


const HighlightMentor: React.FC<BannerProps> = ({ margin }) => {
    const settings = {
        dots: false,
        infinite: true,
        draggable: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow margin={margin} />,
        prevArrow: <PrevArrow margin={margin} />,
    };

    return (
        <div className="mx-auto">
            <Slider {...settings}>
                {mentors.map((mentor, index) => (
                    <div key={index}>
                        <div className="grid grid-cols-2 min-h-screen relative">
                            {/* Left Column */}
                            <div className="bg-background flex flex-col items-start justify-center p-10 z-10 space-y-4 text-customBlue">
                                <h1 className="text-5xl font-semibold">{mentor.name}</h1>
                                <p className="text-3xl">{mentor.career}</p>
                                <p className="whitespace-normal break-words">
                                    {mentor.quote}
                                </p>
                                <div className="flex md:flex-row flex-col gap-4">
                                    <Link href={mentor.url} className="px-8 py-2 bg-customBlue text-background rounded-full text-md lg:text-2xl font-bold text-center">
                                        Xem chi tiết
                                    </Link>
                                    <Link href={mentor.booking} className="px-8 py-2 bg-customBlue text-background rounded-full text-md lg:text-2xl font-bold text-center">
                                        Đặt lịch ngay
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col relative">

                                <div className="bg-customBlue h-4/5" />
                                <div className="bg-background h-1/5" />
                                <Image
                                    alt="mentor avatar"
                                    src={mentor.img}
                                    className="absolute top-10 -left-10 object-contain h-full z-20"
                                    width={800}
                                    height={700}
                                />
                            </div>


                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );

};

export default HighlightMentor;
