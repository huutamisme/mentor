"use client";
import ProfileLayout from "../ProfileLayout";

const Info: React.FC = () => {
    return (
        <ProfileLayout>
            <div className="mb-10">
                <h1 className="text-4xl text-customBlue font-semibold">Thông tin cá nhân</h1>
            </div>
            <div className="grid grid-cols-2 bg-gray-500 rounded-3xl p-10 bg-opacity-25">
                <div className="bg-red-500 rounded-3xl mr-5">
                    <div className="card bg-base-100 w-full shadow-xl">
                        <img
                            src="/capy.jpg"
                            alt="User Avatar" />
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-white rounded-3xl mb-5 h-2/5 shadow-xl p-5">
                        <p>Hello tôi là A</p>
                        <p>Hello tôi là A</p>
                        <p>Hello tôi là A</p>
                        <p>Hello tôi là A</p>
                    </div>
                    <div className="bg-white rounded-3xl h-3/5 shadow-xl p-5">
                        <p>Hello tôi là A</p>
                        <p>Hello tôi là A</p>
                        <p>Hello tôi là A</p>
                        <p>Hello tôi là A</p>
                    </div>
                </div>
            </div>
        </ProfileLayout>
    );
}
export default Info;