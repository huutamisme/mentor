"use client";
import ProfileLayout from "../ProfileLayout";
import { useState } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";


const Info: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState("Nguyễn Văn A");
    const [phone, setPhone] = useState("0123456789");
    const [email, setEmail] = useState("example@email.com");
    const [edu, setEdu] = useState("Đại học Khoa Học Tự Nhiên thành phố Hồ Chí Minh");
    const [major, setMajor] = useState("Kỹ thuật phần mềm");
    const [certificate, setCertificate] = useState("");
    const [field, setField] = useState("Phát triển giao diện web - FE developer");
    const [shortTerm, setShortTerm] = useState("");
    const [longTerm, setLongTerm] = useState("");

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const updateInfo = () => {
        // Logic cập nhật thông tin
        toggleEdit();
    };

    return (
        <ProfileLayout>
            <div className="mb-10">
                <h1 className="text-4xl text-customBlue font-semibold">Thông tin cá nhân</h1>
            </div>
            <div className="grid grid-cols-2 space-x-6 bg-gray-500 rounded-3xl p-10 bg-opacity-25">
                <div className="rounded-3xl">
                    <div className="card bg-base-100 w-full shadow-xl">
                        <figure>
                            <img src="/capy.jpg" alt="User Avatar" />
                        </figure>
                        <div className="card-body">
                            {/* Form thông tin */}
                            <div className="space-y-4 text-customBlue">
                                <div>
                                    <label className="font-bold">Họ tên:</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="input input-bordered w-full"
                                        />
                                    ) : (
                                        <p>{name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="font-bold">Số điện thoại:</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="input input-bordered w-full"
                                        />
                                    ) : (
                                        <p>{phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="font-bold">Email:</label>
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="input input-bordered w-full"
                                        />
                                    ) : (
                                        <p>{email}</p>
                                    )}
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    className="btn bg-customBlue text-white w-full hover:bg-secondary"
                                    onClick={isEditing ? updateInfo : toggleEdit}
                                >
                                    {isEditing ? "Cập nhật" : "Chỉnh sửa"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-white rounded-3xl mb-5 h-2/5 shadow-xl p-5">
                        <div className="border-b-2 border-gray text-customBlue font-semibold flex items-center space-x-2">
                            <FaGraduationCap size={40} />
                            <p>Học vấn và Kinh nghiệm</p>
                        </div>
                        <div className="mt-4 space-y-4 text-customBlue overflow-y-auto max-h-64">
                            <div>
                                <label className="font-bold">Trường đại học:</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={edu}
                                        onChange={(e) => setEdu(e.target.value)}
                                        className="input input-bordered w-full"
                                    />
                                ) : (
                                    <p>{edu}</p>
                                )}
                            </div>

                            <div>
                                <label className="font-bold">Chuyên ngành:</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={major}
                                        onChange={(e) => setMajor(e.target.value)}
                                        className="input input-bordered w-full"
                                    />
                                ) : (
                                    <p>{major}</p>
                                )}
                            </div>

                            <div>
                                <label className="font-bold">Chứng chỉ:</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={certificate}
                                        onChange={(e) => setCertificate(e.target.value)}
                                        className="input input-bordered w-full"
                                    />
                                ) : (
                                    <p>{certificate}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl h-3/5 shadow-xl p-5">
                        <div className="border-b-2 border-gray text-customBlue font-semibold flex items-center space-x-2">
                            <FaBriefcase size={40} />
                            <p>Mục tiêu nghề nghiệp</p>
                        </div>
                        <div className="mt-4 space-y-4 text-customBlue overflow-y-auto max-h-96">
                            <div>
                                <label className="font-bold">Lĩnh vực phát triển:</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={field}
                                        onChange={(e) => setField(e.target.value)}
                                        className="input input-bordered w-full"
                                    />
                                ) : (
                                    <p>{field}</p>
                                )}
                            </div>

                            <div>
                                <label className="font-bold">Ngắn hạn:</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={shortTerm}
                                        onChange={(e) => setShortTerm(e.target.value)}
                                        className="input input-bordered w-full"
                                    />
                                ) : (
                                    <p>{shortTerm}</p>
                                )}
                            </div>

                            <div>
                                <label className="font-bold">Dài hạn:</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={longTerm}
                                        onChange={(e) => setLongTerm(e.target.value)}
                                        className="input input-bordered w-full"
                                    />
                                ) : (
                                    <p>{longTerm}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}
export default Info;