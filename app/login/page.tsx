"use client";

import Image from "next/image";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const Login: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const router = useRouter();

    const handleSignUpClick = () => {
        setIsSignUp(true);
        setTimeout(() => {
            router.push("/signup");
        }, 1000)
    };

    return (
        <div className="grid grid-cols-2">
            <motion.div
                initial={isSignUp ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
                animate={isSignUp ? { x: 300, opacity: 0 } : { x: 0, opacity: 1 }}
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
            <motion.div
                initial={isSignUp ? { x: 0, opacity: 1 } : { x: 0, opacity: 0 }}
                animate={isSignUp ? { x: -300, opacity: 0 } : { x: 100, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex items-center justify-center bg-background"
            >
                <div className="p-8 max-w-sm w-full text-center shadow-lg">
                    <h2 className="text-6xl font-semibold text-gray-800 mb-8">Log In</h2>
                    <p className="my-6 text-gray-600 text-xl">
                        New to this site?{" "}
                        <button onClick={handleSignUpClick} className="text-blue-600 hover:underline">
                            Sign Up
                        </button>
                    </p>
                    <button className="flex items-center justify-start w-full p-3 bg-red-500 text-white mb-4 hover:bg-red-600 transition">
                        <FaGoogle className="mr-16 text-2xl" /> Log in with Google
                    </button>
                    <button className="flex items-center justify-start w-full p-3 bg-blue-600 text-white mb-4 hover:bg-blue-700 transition">
                        <FaFacebook className="mr-16 text-2xl" /> Log in with Facebook
                    </button>
                    <button className="w-full py-3 bg-backround border border-black text-black hover:bg-gray-100 transition">
                        Log in with Email
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
