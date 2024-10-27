"use client";

import Image from "next/image";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const Signup: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const router = useRouter();

    const handleSignUpClick = () => {
        setIsSignUp(true);
        setTimeout(() => {
            router.push("/login");
        }, 1000)
    };

    return (
        <div className="grid grid-cols-2 min-h-screen overflow-hidden">
            <motion.div
                initial={isSignUp ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
                animate={isSignUp ? { x: 300, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center bg-background"
            >
                <div className="p-8 max-w-sm w-full text-center shadow-lg">
                    <h2 className="text-6xl font-semibold text-gray-800 mb-8">Sign Up</h2>
                    <p className="my-6 text-gray-600 text-xl">
                        Already a member?{" "}
                        <button onClick={handleSignUpClick} className="text-blue-600 hover:underline">
                            Log In
                        </button>
                    </p>
                    <button className="flex items-center justify-start w-full p-3 bg-red-500 text-white mb-4 hover:bg-red-600 transition">
                        <FaGoogle className="mr-16 text-2xl" /> Sign up with Google
                    </button>
                    <button className="flex items-center justify-start w-full p-3 bg-blue-600 text-white mb-4 hover:bg-blue-700 transition">
                        <FaFacebook className="mr-16 text-2xl" /> Sign up with Facebook
                    </button>
                    {/* Divider */}
                    <div className="relative flex py-3 items-center mb-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-400">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <button className="w-full py-3 bg-backround border border-black text-black hover:bg-gray-100 transition">
                        Sign up with Email
                    </button>
                </div>
            </motion.div>
            <motion.div
                initial={isSignUp ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
                animate={isSignUp ? { x: -300, opacity: 0 } : { x: 100, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image
                    src="/capy.jpg"
                    alt="Signup"
                    fill
                />
            </motion.div>
        </div>
    );
};
export default Signup;
