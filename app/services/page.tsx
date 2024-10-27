"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ServiceField from "./components/ServiceField";
import NavLayout from '../NavLayout';
interface Tab {
    id: number;
    title: string;
    content: string;
}

const tabsData: Tab[] = [
    { id: 1, title: 'Phỏng vấn giả định', content: 'MockInterview' },
    { id: 2, title: 'Tư vấn nghề nghiệp', content: 'CareerAdvise' },
    { id: 3, title: 'Tư vấn hỗ trợ dự án', content: 'ProjectAdvise' },
];

interface Experience {
    id: number,
    label: string,
    value: string
}

const experienceOptions: Experience[] = [
    { id: 1, label: '1 - 3 năm', value: '1 - 3 năm' },
    { id: 2, label: '3 - 5 năm', value: '3 - 5 năm' },
    { id: 3, label: '5 - 10 năm', value: '5 - 10 năm' },
    { id: 4, label: '10+ năm', value: '10+ năm' },
];

interface Skill {
    id: number,
    label: string,
    value: string
}

const skillsOptions: Skill[] = [
    { id: 1, label: 'Strategic Planning', value: 'Strategic Planning' },
    { id: 2, label: 'Brand Management', value: 'Brand Management' },
    { id: 3, label: 'Digital Marketing', value: 'Digital Marketing' },
    { id: 4, label: 'Crisis Communication', value: 'Crisis Communication' },
    { id: 5, label: 'Public Relations', value: 'Public Relations' },
    { id: 6, label: 'Market Research', value: 'Market Research' },
    { id: 7, label: 'Social Media Management', value: 'Social Media Management' },
    { id: 8, label: 'Content Creation', value: 'Content Creation' },
    { id: 9, label: 'Analytics', value: 'Analytics' },
    { id: 10, label: 'Copywriting', value: 'Copywriting' },
    { id: 11, label: 'Project Management', value: 'Project Management' },
    { id: 12, label: 'Leadership', value: 'Leadership' },
    { id: 13, label: 'Negotiation', value: 'Negotiation' },
    { id: 14, label: 'Creativity', value: 'Creativity' },
    { id: 15, label: 'Recruitment', value: 'Recruitment' },
];

const TabComponent: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState<number>(tabsData[0].id);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [sliderValue, setSliderValue] = useState<number>(1000000);
    const lineRef = useRef<HTMLDivElement>(null);
    const activeTabRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const updateLinePosition = () => {
            if (lineRef.current && activeTabRef.current) {
                lineRef.current.style.width = `${activeTabRef.current.offsetWidth}px`;
                lineRef.current.style.left = `${activeTabRef.current.offsetLeft}px`;
            }
        };
        updateLinePosition();
        window.addEventListener('resize', updateLinePosition);
        return () => window.removeEventListener('resize', updateLinePosition);
    }, [activeTab]);

    useEffect(() => {
        const tabId = searchParams.get('tab');
        if (tabId) {
            setActiveTab(parseInt(tabId));
        } else {
            // Nếu không có tab trong URL, đặt activeTab là 1 và cập nhật URL
            setActiveTab(1);
            router.replace('?tab=1');
        }
    }, [searchParams, router]);

    const handleExpCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setSelectedValues(checked ? [...selectedValues, value] : selectedValues.filter(v => v !== value));
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setSelectedSkills(checked ? [...selectedSkills, value] : selectedSkills.filter(v => v !== value));
    };

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(event.target.value));
    };

    const renderTabContent = () => {
        return <ServiceField experience={selectedValues} skills={selectedSkills} pricing={sliderValue} activeTab={activeTab} />;
    };

    return (
        <NavLayout>
            <div className="flex flex-col items-center pt-10 bg-background border-t-2">
                <div className="relative">
                    <div
                        ref={lineRef}
                        className={`absolute bottom-0 left-0 h-1 bg-customBlue duration-200 ${typeof window !== 'undefined' && window.innerWidth < 640 ? 'hidden' : ''}`}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 px-10 border-b-2">
                        {tabsData.map(tab => (
                            <div
                                key={tab.id}
                                className={`cursor-pointer text-lg md:text-2xl text-customBlue py-4 ${activeTab === tab.id ? 'opacity-100' : 'opacity-60'}`}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    router.push(`?tab=${tab.id}`);
                                }}
                                ref={activeTab === tab.id ? activeTabRef : null}
                                id={`tab-${tab.id}`}
                            >
                                {tab.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-8 flex flex-col lg:flex-row bg-background text-customBlue">
                <div className="w-full lg:w-1/4">
                    <div className="rounded-3xl p-2 bg-white shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Kinh nghiệm</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {experienceOptions.map(option => (
                                <div key={option.id} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        id={`experience-${option.id}`}
                                        value={option.value}
                                        checked={selectedValues.includes(option.value)}
                                        onChange={handleExpCheckboxChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor={`experience-${option.id}`}>{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl p-2 bg-white shadow-lg mt-4">
                        <h2 className="text-xl font-bold mb-4">Kỹ năng</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {skillsOptions.map(option => (
                                <div key={option.id} className="flex items-center mb-2 text-xs lg:text-lg">
                                    <input
                                        type="checkbox"
                                        id={`skills-${option.id}`}
                                        value={option.value}
                                        checked={selectedSkills.includes(option.value)}
                                        onChange={handleCheckboxChange}
                                        className="mr-2"
                                    />
                                    <label htmlFor={`skills-${option.id}`}>{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl p-2 bg-white shadow-lg mt-4">
                        <h2 className="text-xl font-bold mb-4">Mức phí</h2>
                        <div className="flex items-center">
                            <input
                                type="range"
                                min={200000}
                                max={1000000}
                                step={50000}
                                value={sliderValue}
                                onChange={handleSliderChange}
                                className="range"
                            />
                            <span className="ml-4">{sliderValue.toLocaleString('vi-vn')}</span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-3/4 flex justify-center mt-4 lg:mt-0">
                    {renderTabContent()}
                </div>
            </div>
        </NavLayout>
    );
};

export default TabComponent;
