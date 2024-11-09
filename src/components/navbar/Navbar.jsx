import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(){
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }
    
    return(
        <div className="bg-black shadow-lg h-16 w-full flex flex-row items-center fixed lg:px-20">
            <span className="text-white text-4xl ml-20">Sajib</span>

            <button onClick={toggleMenu}
                className="text-white ml-auto lg:hidden mr-4"
            >
            <GiHamburgerMenu className="w-8 h-8" />
            </button>

                <ul className="hidden lg:flex flex-row text-white ml-auto space-x-8">
                    <li className="hover:text-gray-400 cursor-pointer">Home</li>
                    <li className="hover:text-gray-400 cursor-pointer">About</li>
                    <li className="hover:text-gray-400 cursor-pointer">Projects</li>
                    <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                </ul>

                {open && (
                    <ul className="lg:hidden flex flex-col absolute top-16 left-0 w-full bg-black text-white opacity-95  space-y-4 p-4">
                        <li className="hover:text-gray-400 cursor-pointer">Home</li>
                        <li className="hover:text-gray-400 cursor-pointer">About</li>
                        <li className="hover:text-gray-400 cursor-pointer">Projects</li>
                        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                    </ul>
                )}
        </div>
    )
}