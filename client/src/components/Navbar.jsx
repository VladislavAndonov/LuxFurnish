import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import { useEffect, useState } from 'react';


export default function Navbar() {
    const [activeNav, setActiveNav] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const navHandler = () => {
        setActiveNav(!activeNav);
    }

    // Effect to handle screen width changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setActiveNav(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);

  
    return (
        <nav className="relative">
            <div className={`flex justify-between items-center fixed top-0 left-0 right-0 h-20 transform ${scrolling ? 'bg-white w-full shadow-xl px-[12em] py-[3.5em] transition delay-150 duration-300' : 'w-[80%] top-5 left-1/2 transform -translate-x-1/2'}`}>
                <div className="text-4xl logo font-semibold">
                    <Link to="/">LuxFurnish</Link>
                </div>

                <div className="hidden lg:flex lg:gap-10 uppercase">
                    <Link to="/" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">Home</Link>
                    <Link to="/catalog" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">Catalog</Link>
                    <Link to="/about" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">About</Link>
                    <Link to="/login" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">Login</Link>
                    <Link to="/register" className="text-xl hover:underline underline-offset-8 focus:underline-offset-8">Register</Link>
                </div>

                <div className="lg:hidden">
                    <div onClick={navHandler} className="cursor-pointer">
                        {activeNav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </div>
                </div>
            
                

                <div className={`fixed left-[-15%] top-[-25%] pt-10 pl-12 w-[60%] h-screen border-r border-r-gray-900 bg-white ease-in-out delay-150 duration-300 transform ${activeNav ? 'translate-x-0' : '-translate-x-[125%]'}`}>
                    <div className="text-4xl logo font-semibold">
                        <Link to="/">LuxFurnish</Link>
                    </div>

                    <div className="flex flex-col w-full uppercase pt-12">
                        <Link to="/" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">Home</Link>
                        <Link to="/catalog" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">Catalog</Link>
                        <Link to="/about" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">About</Link>
                        <Link to="/login" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">Login</Link>
                        <Link to="/register" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}