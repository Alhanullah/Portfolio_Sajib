import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const aboutSectionImages = ["background.jpg", "Profile2.svg"];

export default function Home() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const message = "Alhanullah Sajib...";
    const typingSpeed = 100;
    const pauseDuration = 2000;

    useEffect(() => {
        let typingInterval;

        if (index <= message.length) {
            typingInterval = setInterval(() => {
                setText(message.slice(0, index));
                setIndex((prev) => prev + 1);
            }, typingSpeed);
        } else {
            setTimeout(() => {
                setIndex(0);
                setText("");
            }, pauseDuration);
        }

        return () => clearInterval(typingInterval);
    }, [index]);

    return (
        <div className="bg-black bg-fixed">
            <div
                className="flex bg-cover bg-center h-screen bg-fixed"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/${aboutSectionImages[0]})`,
                }}
            >
                <div className="flex flex-col justify-center items-center w-full h-full bg-gray-100 bg-opacity-50 px-4 py-10 sm:p-10">
                    <h1 className="text-3xl sm:text-4xl text-center text-black font-bold mb-4">
                        Hi there, my name is
                    </h1>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-2xl sm:text-3xl font-bold text-center text-green-950 h-[45px]"
                    >
                        {text}
                    </motion.h1>
                </div>
            </div>
        </div>
    );
}
