"use client";

import { FaComments } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

type MessageType = {
    type: 'user' | 'system';
    message: string | JSX.Element;
};

type newConversation = (MessageType | {
    type: string;
    message: string;
})[]

const ChatBubble: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [conversation, setConversation] = useState<newConversation>([]);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setConversation([]); // Reset hội thoại khi mở/đóng
    };

    const faqData = [
        {
            question: "Về Mentor",
            answer: "Mentor là một nền tảng trực tuyến - Website giúp sinh viên, những người ít kinh nghiệm được kết nối với các chuyên gia hàng đầu, và có uy tín trong ngành. Nền tảng sẽ cung cấp các công cụ và dịch vụ hữu ích giúp người dùng phát triển kỹ năng, xác định mục tiêu nghề nghiệp, và tạo cầu nối với những người có chuyên môn ở các doanh nghiệp.",
        },
        {
            question: "Cách đặt lịch hẹn",
            answer: "Bước 1: Chọn dịch vụ mình cần.<br/>Bước 2: Chọn mentor theo tiêu chí của bản thân.<br/>Bước 3: Đặt lịch hẹn và tham gia tư vấn với mentor phù hợp.",
        },
        {
            question: "Các dịch vụ",
            answer: "Mentor có 3 dịch vụ:<br/> 1. Phỏng vấn giả định: Tham gia phỏng vấn mô phỏng 1-1 với người có chuyên môn và nhận kết quả đánh giá.<br/>2. Tư vấn khởi nghiệp: Tham gia tư vấn 1-1 với chuyên gia và xây dựng kế hoạch phát triển nghề nghiệp.<br/>3. Tư vấn hỗ trợ dự án: Tham gia tư vấn 1-1 với chuyên gia và được nhận lời khuyên và đánh giá về các dự án cá nhân.",
        },
        {
            question: "Có tốn phí không?",
            answer: "Bạn được dùng thử 1 lần tư vấn.<br/>Ở những lần tư vấn tiếp theo bạn phải trả phí, bạn có thể mua gói ưu đãi cho 1 tháng hoặc 1 năm.",
        },
    ];

    const handleQuestionClick = (questionIndex: number) => {
        const selectedFaq = faqData[questionIndex];
        const newConversation = [...conversation, { type: 'user', message: selectedFaq.question }];

        setTimeout(() => {
            setConversation((prevConversation) => [
                ...prevConversation,
                { type: 'system', message: selectedFaq.answer },
                {
                    type: 'system',
                    message: (
                        <span>
                            Hãy điền thông tin vào{' '}
                            <Link href="/support" className="text-blue-500 underline">
                                Contact us
                            </Link>{' '}
                            hoặc liên hệ (+84) 028.12345678 để Mentor hỗ trợ bạn.
                        </span>
                    ),
                },
            ]);
        }, 1000);

        setConversation(newConversation);
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [conversation]);

    return (
        <>
            <div className="fixed bottom-16 right-6 text-black">
                <button
                    className="bg-white rounded-full p-4 shadow-lg hover:bg-blue-500 transition duration-300"
                    onClick={toggleChat}>
                    <FaComments size={30} />
                </button>
            </div>

            {isOpen && (
                <div className="fixed bottom-20 right-6 w-80 rounded-3xl shadow-lg bg-highlight">
                    <div className="flex flex-row justify-between items-start mb-4 bg-background shadow-lg p-5 rounded-t-3xl">
                        <div className='flex flex-col items-start'>
                            <h2 className="text-lg font-light text-black">My Site 1</h2>
                            <div className="flex items-center">
                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
                                <h4 className="text-md font-light text-black">We'll reply as soon as possible</h4>
                            </div>
                        </div>

                        <button className="text-gray-500" onClick={toggleChat}>✕</button>
                    </div>

                    <div className="text-sm">
                        <div
                            ref={chatContainerRef}
                            className="chat-container space-y-4 h-auto max-h-[288px] overflow-y-auto">
                            {conversation.map((chat, index) => (
                                <div key={index} className={`chat ${chat.type === 'user' ? 'chat-end' : 'chat-start'}`}>
                                    <div className="chat-bubble bg-gray-300 text-customBlue">
                                        {chat.type === 'system' && typeof chat.message === 'string' ? (
                                            <span dangerouslySetInnerHTML={{ __html: chat.message }} />
                                        ) : (
                                            chat.message
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex w-full flex-col border-opacity-50">
                            <div className="divider"></div>
                        </div>

                        <div className='grid grid-cols-2 px-2 place-items-center'>
                            {faqData.map((faq, index) => (
                                <div key={index} className="mb-3 bg-customBlue p-2 rounded-full w-fit">
                                    <button
                                        className="text-white"
                                        onClick={() => handleQuestionClick(index)}>
                                        {faq.question}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBubble;
