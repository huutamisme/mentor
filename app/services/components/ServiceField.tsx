import Link from 'next/link';
import { motion } from 'framer-motion';
import { MentorData } from '../Data/Mentor';
import Image from 'next/image';

interface ServiceFieldProps {
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
    field: string;
    badges: string[];
}

const ServiceField: React.FC<ServiceFieldProps> = ({ experience, skills, pricing, activeTab }) => {

    const fieldMapping = {
        1: "mock",
        2: "career",
        3: "project",
    } as const; // object cố định không đổi

    // Lọc dữ liệu dựa trên các props
    const filteredCards = MentorData.filter((card: CardData) => {
        const isActiveTabMatch = card.field === fieldMapping[activeTab as keyof typeof fieldMapping]; // keyof đảm bảo các giá trị phải là key của fieldMapping
        const hasExperience = experience.length > 0 ? experience.some(exp => card.badges.includes(exp)) : true;
        const hasSkills = skills.length > 0 ? skills.some(skill => card.badges.includes(skill)) : true;
        const hasPricing = pricing ? parseFloat(card.pricing.toString()) <= pricing : true;

        return isActiveTabMatch && hasExperience && hasSkills && hasPricing;
    });

    return (
        <div className="space-y-5 px-10">
            {filteredCards.length === 0 ? (
                <h2 className="text-3xl text-center text-customBlue">Không có kết quả nào phù hợp!</h2>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filteredCards.map((card) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="card bg-base-100 shadow-xl flex items-center p-2"
                        >
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <Image src={card.image} alt={card.name} width={170} height={170} />
                                </div>
                            </div>
                            <div className="card-body flex items-center">
                                <h2 className="card-title text-customBlue text-center">{card.name}</h2>
                                <p className="text-customBlue max-h-[2rem] text-center">{card.career}</p>
                                <p>{card.pricing.toLocaleString('vi-vn')}/giờ</p>
                                <div className="space-x-2 space-y-2 max-h-[4rem] overflow-hidden overflow-ellipsis line-clamp-2">
                                    {card.badges.map((badge, index) => (
                                        <div key={index} className="badge badge-outline text-xs">{badge}</div>
                                    ))}
                                </div>
                                <div className="flex flex-col xl:flex-row gap-2">
                                    <Link
                                        href={`/services/${card.id}`}
                                        className="py-2 px-4 bg-customBlue text-background rounded-full text-sm font-bold text-center">
                                        Chi tiết
                                    </Link>
                                    <Link href={`/services/${card.id}/book`}
                                        className="py-2 px-4 bg-customBlue text-background rounded-full text-sm font-bold text-center">
                                        Đặt lịch ngay
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ServiceField;
