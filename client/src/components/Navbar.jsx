import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [activeNav, setActiveNav] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const navHandler = () => {
        setActiveNav(!activeNav);
    }

    // Handle screen width changes
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

    // Handle scrolling
    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="relative">
            <div className={`fixed top-0 left-0 right-0 h-20 flex justify-between items-center ${scrolling ? 'bg-[#D7DAD3] shadow-md px-8 lg:px-12 py-3 transition duration-300' : 'bg-transparent w-[80%] top-5 left-1/2 transform -translate-x-1/2'} z-10`}>
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

                <div className="lg:hidden flex items-center">
                    <div onClick={navHandler} className="cursor-pointer">
                        {activeNav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 left-0 h-screen w-[60%] border-r border-r-gray-900 bg-[#D7DAD3] ease-in-out duration-300 transform ${activeNav ? 'translate-x-0' : '-translate-x-full'} z-20 lg:hidden`}>
                <div className="text-4xl logo font-semibold p-8">
                    <Link to="/">LuxFurnish</Link>
                </div>

                <div className="flex flex-col w-full uppercase p-8">
                    <Link to="/" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">Home</Link>
                    <Link to="/catalog" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">Catalog</Link>
                    <Link to="/about" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">About</Link>
                    <Link to="/login" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">Login</Link>
                    <Link to="/register" className="p-4 hover:underline underline-offset-8 focus:underline-offset-8">Register</Link>
                </div>
            </div>
        </nav>
    );
}