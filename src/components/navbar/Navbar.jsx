import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ refs }) {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
            setOpen(false); 
        }
    };
    return (
        <div className="bg-[#162231] shadow-lg h-16 w-full flex items-center fixed px-4 sm:px-8 lg:px-20 z-50">
            <span className="text-white text-2xl sm:text-3xl lg:text-4xl ml-4 lg:ml-20">Sajib</span>
            <button onClick={toggleMenu} className="text-white ml-auto lg:hidden mr-4">
                <GiHamburgerMenu className="w-8 h-8" />
            </button>
            <ul className="hidden lg:flex flex-row text-white ml-auto space-x-8">
                <li onClick={() => scrollToSection(refs.homeRef)} className="hover:text-gray-400 cursor-pointer">Home</li>
                <li onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-gray-400 cursor-pointer">About</li>
                <li onClick={() => scrollToSection(refs.projectRef)} className="hover:text-gray-400 cursor-pointer">Projects</li>
                <li onClick={() => scrollToSection(refs.contactRef)} className="hover:text-gray-400 cursor-pointer">Contact</li>
            </ul>
            {open && (
                <ul className="lg:hidden flex flex-col absolute top-16 left-0 w-full bg-black text-white opacity-95 space-y-4 p-4 text-center">
                    <li onClick={() => scrollToSection(refs.homeRef)}  className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-gray-400 cursor-pointer">About</li>
                    <li onClick={() => scrollToSection(refs.projectRef)} className="hover:text-gray-400 cursor-pointer">Projects</li>
                    <li onClick={() => scrollToSection(refs.contactRef)} className="hover:text-gray-400 cursor-pointer">Contact</li>
                </ul>
            )}
        </div>
    );
}
