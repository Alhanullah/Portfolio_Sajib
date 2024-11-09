import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const aboutSectionImages = ["background.jpg", "Profile2.svg"];

export default function About() {
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

    const { ref: aboutRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className='bg-black bg-fixed'>
            {/* Background section with text animation */}
            <div className="flex bg-cover bg-center h-screen bg-fixed"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/${aboutSectionImages[0]})`
                }}
            >
                <div className="flex flex-col justify-center items-center w-full h-full bg-gray-100  bg-opacity-50 p-10">
                    <h1 className="text-4xl text-center text-black font-bold mb-4">
                        Hi there, my name is
                    </h1>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: inView ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl font-bold text-center text-green-950"
                    >
                        {text}
                    </motion.h1>
                </div>
            </div>

            {/* Profile and about section */}
            <div
                ref={aboutRef}
                className="bg-gray-200 ml-20 mt-20 mr-20 rounded-lg flex flex-col lg:flex-row justify-evenly items-center p-10 lg:p-20"
            >
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex-shrink-0 mb-10 lg:mb-0">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/${aboutSectionImages[1]}`}
                        alt="Profile"
                        className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] "
                    />
                </motion.div>

                {/* Smooth left-to-right slide-in effect for about section */}
                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="max-w-lg p-10 h-auto"
                >
                    <h1 className="font-bold text-2xl lg:text-3xl text-gray-800 mb-4">About Myself</h1>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, temporibus minus incidunt earum recusandae at ullam exercitationem dolorum
                        asperiores quaerat quis odit consectetur itaque nobis, nesciunt tenetur officia, natus alias!
                    </p>
                    <button className='hover:text-white hover:bg-black cursor-pointer border-2 border-black p-2 rounded-lg transition-all'>
                        Contact
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
