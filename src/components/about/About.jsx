import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const aboutSectionImages = ["background.jpg", "user-1.png"];

export default function About() {
    const { ref: aboutRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className="py-1 bg-[#162231] ">

            <div
                ref={aboutRef}
                className="bg-[#2A384C] text-white mx-4 sm:mx-10 lg:mx-20 my-10 rounded-full flex flex-col lg:flex-row justify-evenly items-center p-6 sm:p-10 lg:p-20"
            >
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="flex-shrink-0 mb-10 lg:mb-0"
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/img/${aboutSectionImages[1]}`}
                        alt="Profile"
                        className="rounded-full h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="rounded-lg  max-w-lg p-4 sm:p-6 lg:p-10"
                >
                    <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-white mb-4">
                        About Myself
                    </h1>
                    <p className="text-gray-400 leading-relaxed mb-6">
                    Hello, I’m Alhanullah Sajib, a CSE student at Bangladesh University of Business and Technology (BUBT). 
                    I am passionate about web development and have experience working with React.js, Tailwind CSS, as well as raw 
                    HTML/CSS. I enjoy building interactive and responsive websites that provide seamless user experiences. 
                    I'm always eager to learn new technologies and continuously improve my skills. My goal is to combine my academic 
                    knowledge with practical web development to create impactful solutions. Let’s connect and collaborate on exciting 
                    projects!
                    </p>
                    <button className="cursor-pointer bg-blue-600 hover:bg-opacity-70 text-white px-8 py-3 rounded mb-4 transition-all">
                        Contact
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
