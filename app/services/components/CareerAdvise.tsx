import Link from 'next/link';
import { motion } from 'framer-motion';
import { CareerAdviseData } from '../Data/CareerAdvise';
import Image from 'next/image';

interface CareerAdviseProps {
    experience: string[];
    skills: string[];
    pricing: number;
    activeTab: number;
}

interface CardData {
    id: number;
    name: string;
    career: string;
    pricing: number;
    image: string;
    badges: string[];
}

export default function CareerAdvise({ experience, skills, pricing, activeTab }: CareerAdviseProps) {
    // Lọc dữ liệu dựa trên các props
    const filteredCards = CareerAdviseData.filter((card: CardData) => {
        const hasExperience = experience.length > 0 ? experience.some(exp => card.badges.includes(exp)) : true;
        const hasSkills = skills.length > 0 ? skills.some(skill => card.badges.includes(skill)) : true;
        const hasPricing = pricing ? parseFloat(card.pricing.toString()) <= pricing : true;

        return hasExperience && hasSkills && hasPricing;
    });

    // Hàm chia dữ liệu thành các hàng
    const chunkArray = (arr: CardData[], size: number): CardData[][] => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const rows = chunkArray(filteredCards, 3);

    return (
        <div className="space-y-5 px-10">
            {filteredCards.length === 0 ? (
                <h2 className="text-3xl text-center text-customBlue">Không có kết quả nào phù hợp!</h2>
            ) : (
                rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap justify-center">
                        {row.map((card) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.3 }}
                                className="pt-3 card bg-base-100 flex-1 min-w-[250px] max-w-[300px] shadow-xl flex items-center m-2"
                                style={{ flexBasis: '100%' }} // Đảm bảo mỗi card chiếm toàn bộ chiều rộng hàng
                            >
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <Image src={card.image} alt={card.name} width={170} height={170} />
                                    </div>
                                </div>
                                <div className="card-body flex items-center">
                                    <h2 className="card-title text-customBlue">{card.name}</h2>
                                    <p className="text-customBlue max-h-[1rem]">{card.career}</p>
                                    <p>{card.pricing.toLocaleString('vi-vn')}/giờ</p>
                                    <div className="space-x-2 space-y-2 max-h-[4rem] overflow-hidden overflow-ellipsis line-clamp-2">
                                        {card.badges.map((badge, index) => (
                                            <div key={index} className="badge badge-outline">{badge}</div>
                                        ))}
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link
                                            href={`/services/mock/${card.id}?tab=${activeTab}`}
                                            className="py-2 px-4 bg-customBlue text-background rounded-full text-sm font-bold">
                                            Chi tiết
                                        </Link>
                                        <Link href={`/services/book/mock/${card.id}?tab=${activeTab}`} className="py-2 px-4 bg-customBlue text-background rounded-full text-sm font-bold">
                                            Đặt lịch hẹn ngay
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ))
            )}
        </div>
    );
}
