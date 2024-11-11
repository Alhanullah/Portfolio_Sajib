import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const testimonialList = [
    {
        img: "/img/user-1.png",
        name: "Alhanullah Sajib",
        position: "CEO & Founder at Alhanullah",
        content:
            "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.",
    },
    {
        img: "/img/user-2.png",
        name: "Ragib Raiyan",
        position: "CEO & Founder Abul",
        content:
            "Lorem ipsum is placeholder text commonly used in the graphic, print industries for previewing layouts and visual mockups.",
    },
    {
        img: "/img/user-3.png",
        name: "Ragib Rohan",
        position: "CEO & Founder at Rohan",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

export default function Testimonial () {
    const [index, setIndex] = useState(0);
    const { img, name, position, content } = testimonialList[index];

    const handleControl = (type) => {
        if (type === "prev") {
            setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
        } else if (type === "next") {
            setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
        }
    };

    return (
        <section className=" py-14 md:py-24 bg-[#162231] text-white ">
            <div className="container px-4 mx-auto relative">
                <div className="grid grid-cols-2 gap-6">
                    {/* Profile Section */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center p-6 py-12">
                            <div className="mr-3">
                                <img
                                    src={img}
                                    alt={name}
                                    className="max-w-[100px] min-w-[100px] h-auto rounded-full border border-blue-600"
                                />
                            </div>
                            <div>
                                <h4 className="text-2xl font-medium mb-2">{name}</h4>
                                <p className="text-lg opacity-80">{position}</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center h-full justify-center">
                            <p className="relative text-xl font-bold md:text-[22px]">
                                <FontAwesomeIcon
                                    icon={faQuoteLeft}
                                    className="absolute text-[100px] text-blue-600 text-opacity-10 -top-3 lg:-top-12 left-0"
                                />
                                {content}
                                <FontAwesomeIcon
                                    icon={faQuoteRight}
                                    className="absolute text-[100px] text-blue-600 text-opacity-10 -bottom-3 lg:-bottom-12 right-0"
                                />
                            </p>
                        </div>
                    </div>
                </div>

                {/* Control Buttons */}
                <div>
                    <button
                        className="absolute top-1/2 -translate-y-1/2 left-3 md:-left-3 bg-[#2A384C] w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-500"
                        onClick={() => handleControl("prev")}
                        aria-label="Previous testimonial"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button
                        className="absolute top-1/2 -translate-y-1/2 right-3 md:-right-3 bg-[#2A384C] w-12 h-12 flex justify-center items-center rounded-full hover:bg-gray-500"
                        onClick={() => handleControl("next")}
                        aria-label="Next testimonial"
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </section>
    );
};
