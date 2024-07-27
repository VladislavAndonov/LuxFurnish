import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-gray-200 w-full py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <p className="logo text-2xl font-bold text-gray-800">LuxFurnish &copy;</p>
                        <div className="flex items-center gap-x-4 mt-12">
                            <a href="https://facebook.com" className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                                <FaFacebookF className="text-white" />
                            </a>
                            <a href="https://twitter.com" className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                                <FaTwitter className="text-white" />
                            </a>
                            <a href="https://instagram.com" className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                                <FaInstagram className="text-white" />
                            </a>
                            <a href="https://linkedin.com" className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                                <FaLinkedinIn className="text-white" />
                            </a>
                        </div>
                    </div>
                    <div className="sm:ml-0 ml-8">
                        <h2 className="text-base font-semibold leading-4 text-gray-800">Company</h2>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Blog</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Pricing</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">About Us</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Contact Us</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Testimonials</p>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold leading-4 text-gray-800">Support</h2>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Legal Policy</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Status Policy</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Terms of Service</p>
                    </div>
                    <div className="mt-10 lg:block hidden">
                        <label className="text-xl font-medium leading-5 text-gray-800">Get Updates</label>
                        <div className="flex items-center border border-gray-800 mt-4">
                            <input type="text" className="text-base leading-4 p-4 w-full focus:outline-none text-gray-800 placeholder-gray-800" placeholder="Enter your email" />
                            <button className="mr-[2px] bg-gray-800 text-white p-4 cursor-pointer hover:bg-gray-700">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:hidden">
                    <label className="text-xl font-medium leading-5 text-gray-800">Get Updates</label>
                    <div className="flex items-center border border-gray-800 mt-4">
                        <input type="text" className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800" placeholder="Enter your email" />
                        <button className="mr-[2px] cursor-pointer relative z-40 bg-gray-800 text-white p-4 hover:bg-gray-700">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}