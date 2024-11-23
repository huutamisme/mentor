"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SlickBtn";
import Link from "next/link";


interface BannerProps {
    margin: number
}

interface Banner {
    title: string,
    line1: string,
    line2: string
}

const Banner: React.FC<BannerProps> = ({ margin }) => {
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

    const banners: Banner[] = [
        {
            title: "PHỎNG VẤN GIẢ ĐỊNH",
            line1: "Tham gia phỏng vấn mô phỏng 1-1 với người có chuyên môn",
            line2: "Nhận kết quả đánh giá chi tiết"
        },
        {
            title: "TƯ VẤN NGHỀ NGHIỆP",
            line1: "Tham gia tư vấn 1-1 với chuyên gia",
            line2: "Xây dựng kế hoạch phát triển nghề nghiệp"
        },
        {
            title: "TƯ VẤN HỖ TRỢ DỰ ÁN",
            line1: "Tham gia tư vấn 1-1 với chuyên gia",
            line2: "Được nhận lời khuyên và đánh giá về các dự án cá nhân"
        }
    ];

    return (
        <div className="mx-auto">
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div key={index} className="flex flex-col justify-center p-4 text-center bg-customBlue text-white h-[470px] md:h-[250px]">
                        <h2 className="text-6xl font-bold mb-4">{banner.title}</h2>
                        <p className="text-3xl mb-2">
                            <span className="mr-2">✦</span>
                            {banner.line1}
                        </p>
                        <p className="text-3xl mb-4">
                            <span className="mr-2">✦</span>
                            {banner.line2}
                        </p>
                        <Link href={`/services?tab=${index + 1}`} className="px-4 py-2 bg-white text-customBlue rounded-full text-2xl font-bold">
                            Tìm hiểu ngay
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
