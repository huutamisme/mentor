"use client";

import Image from "next/image";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const Signup: React.FC = () => {
    const [isLogIn, setIsLogIn] = useState(false);
    const router = useRouter();

    const handleSignUpClick = () => {
        setIsLogIn(true);
        setTimeout(() => {
            router.push("/login");
        }, 1000)
    };

    return (
        <>
            {isLogIn ?
                <div className="grid grid-cols-2">
                    <motion.div
                        animate={{
                            x: 300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1 }}
                        className="p-8 max-w-sm w-full text-center shadow-lg"
                    >

                        {/* Title */}
                        <h2 className="text-6xl font-semibold text-gray-800 mb-8">Sign Up</h2>

                        {/* Call to action for sign up */}
                        <p className="my-6 text-gray-600 text-xl">
                            Already a member?{" "}
                            <button
                                onClick={handleSignUpClick} // Gọi hàm khi nhấp vào nút đăng ký
                                className="text-blue-600 hover:underline"
                            >
                                Sign up
                            </button>
                        </p>

                        {/* Google Sign up */}
                        <button className="flex items-center justify-start w-full p-3 bg-red-500 text-white mb-4 hover:bg-red-600 transition">
                            <FaGoogle className="mr-16 text-2xl" /> Sign up with Google
                        </button>

                        {/* Facebook Sign up */}
                        <button className="flex items-center justify-start w-full p-3 bg-blue-600 text-white mb-4 hover:bg-blue-700 transition">
                            <FaFacebook className="mr-16 text-2xl" /> Sign up with Facebook
                        </button>

                        {/* Sign up with Email */}
                        <button className="w-full py-3 bg-backround border border-black text-black hover:bg-gray-100 transition">
                            Sign up with Email
                        </button>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1 }}
                        className="w-full"
                    >
                        <Image
                            src="/capy.jpg"
                            alt="Login"
                            width={500}
                            height={500}
                        />

                    </motion.div>

                </div>
                :
                <div className="grid grid-cols-2">
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1, // Mờ dần khi biến mất
                        }}
                        transition={{ duration: 1 }}
                        className="p-8 max-w-sm w-full text-center shadow-lg"
                    >

                        {/* Title */}
                        <h2 className="text-6xl font-semibold text-gray-800 mb-8">Sign Up</h2>

                        {/* Call to action for sign up */}
                        <p className="my-6 text-gray-600 text-xl">
                            New to this site?{" "}
                            <button
                                onClick={handleSignUpClick} // Gọi hàm khi nhấp vào nút đăng ký
                                className="text-blue-600 hover:underline"
                            >
                                Log In
                            </button>
                        </p>

                        {/* Google Sign up */}
                        <button className="flex items-center justify-start w-full p-3 bg-red-500 text-white mb-4 hover:bg-red-600 transition">
                            <FaGoogle className="mr-16 text-2xl" /> Sign up with Google
                        </button>

                        {/* Facebook Sign up */}
                        <button className="flex items-center justify-start w-full p-3 bg-blue-600 text-white mb-4 hover:bg-blue-700 transition">
                            <FaFacebook className="mr-16 text-2xl" /> Sign up with Facebook
                        </button>

                        {/* Sign up with Email */}
                        <button className="w-full py-3 bg-backround border border-black text-black hover:bg-gray-100 transition">
                            Sign up with Email
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{
                            x: 100,
                            opacity: 1,
                        }}
                        transition={{ duration: 1 }}
                        className="w-full"
                    >
                        <Image
                            src="/capy.jpg"
                            alt="Login"
                            width={500}
                            height={500}
                        />

                    </motion.div>
                </div>
            }
        </>
    );
};

export default Signup;
