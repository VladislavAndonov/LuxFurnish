import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-[#D7DAD3] w-full py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <p className="logo text-2xl font-bold text-[#1A1A1A]">LuxFurnish &copy;</p>
                        <div className="flex items-center gap-x-4 mt-12">
                            <a href="https://facebook.com" className="opacity-50 w-8 h-8 flex-shrink-0 bg-[#1A1A1A] cursor-pointer hover:bg-[#81837F] rounded-full flex items-center justify-center">
                                <FaFacebookF className="text-white" />
                            </a>
                            <a href="https://twitter.com" className="opacity-50 w-8 h-8 flex-shrink-0 bg-[#1A1A1A] cursor-pointer hover:bg-[#81837F] rounded-full flex items-center justify-center">
                                <FaTwitter className="text-white" />
                            </a>
                            <a href="https://instagram.com" className="opacity-50 w-8 h-8 flex-shrink-0 bg-[#1A1A1A] cursor-pointer hover:bg-[#81837F] rounded-full flex items-center justify-center">
                                <FaInstagram className="text-white" />
                            </a>
                            <a href="https://linkedin.com" className="opacity-50 w-8 h-8 flex-shrink-0 bg-[#1A1A1A] cursor-pointer hover:bg-[#81837F] rounded-full flex items-center justify-center">
                                <FaLinkedinIn className="text-white" />
                            </a>
                        </div>
                    </div>
                    <div className="sm:ml-0 ml-8">
                        <h2 className="text-base font-semibold leading-4 text-[#1A1A1A]">Company</h2>
                        <p className="hover:text-[#81837F] text-base leading-4 mt-6 text-[#1A1A1A] cursor-pointer">Blog</p>
                        <p className="hover:text-[#81837F] text-base leading-4 mt-6 text-[#1A1A1A] cursor-pointer">Pricing</p>
                        <p className="hover:text-[#81837F] text-base leading-4 mt-6 text-[#1A1A1A] cursor-pointer">About Us</p>
                        <p className="hover:text-[#81837F] text-base leading-4 mt-6 text-[#1A1A1A] cursor-pointer">Contact Us</p>
                        <p className="hover:text-[#81837F] text-base leading-4 mt-6 text-[#1A1A1A] cursor-pointer">Testimonials</p>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold leading-4 text-[#1A1A1A]">Support</h2>
                        <p className="hover:text-[#81837F] text-base leading-4 mt-6 text-[#1A1A1A] cursor-pointer">Legal Policy</p>
                        <p className="hover:text-[#81837F] text-base leading-4 mt-6 text-[#1A1A1A] cursor-pointer">Status Policy</p>
                        <p className="hover:text-[#81837F] text-base leading-4 mt-6 text-[#1A1A1A] cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-[#81837F] text-base leading-4 mt-6 text-[#1A1A1A] cursor-pointer">Terms of Service</p>
                    </div>
                    <div className="mt-10 lg:block hidden">
                        <label className="text-xl font-medium leading-5 text-[#1A1A1A]">Get Updates</label>
                        <div className="flex items-center border border-[#1A1A1A] mt-4">
                            <input type="text" className="text-base leading-4 p-4 w-full focus:outline-none text-[#1A1A1A] placeholder-[#1A1A1A]" placeholder="Enter your email" />
                            <button className="mr-[2px] bg-[#76A763] text-white p-4 cursor-pointer hover:bg-[#93B685]">
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:hidden">
                    <label className="text-xl font-medium leading-5 text-[#1A1A1A]">Get Updates</label>
                    <div className="flex items-center border border-[#1A1A1A] mt-4">
                        <input type="text" className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-[#1A1A1A] placeholder-[#1A1A1A]" placeholder="Enter your email" />
                        <button className="mr-[2px] cursor-pointer relative z-40 bg-[#76A763] text-white p-4 hover:bg-[#93B685] ">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}