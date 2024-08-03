import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-[#D7DAD3] w-full py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <div className="flex flex-col">
                        <p className="logo text-4xl font-bold text-[#1A1A1A]">LuxFurnish</p>
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
                        <div className="flex items-center gap-x-4 mt-12">
                            <p>&copy;LuxFurnish 2024, All rights reserved.</p>
                        </div>
                    </div>
                    <div className="sm:ml-0 ml-8">
                        <p className="hover:text-[#81837F] text-lg leading-6 text-[#1A1A1A] cursor-pointer">Home</p>
                        <p className="hover:text-[#81837F] text-lg leading-6 mt-6 text-[#1A1A1A] cursor-pointer">Products</p>
                        <p className="hover:text-[#81837F] text-lg leading-6 mt-6 text-[#1A1A1A] cursor-pointer">About</p>
                        <p className="hover:text-[#81837F] text-lg leading-6 mt-6 text-[#1A1A1A] cursor-pointer">Contact Us</p>
                    </div>
                    <div>
                        <p className="hover:text-[#81837F] text-lg leading-6 text-[#1A1A1A] cursor-pointer">Legal Policy</p>
                        <p className="hover:text-[#81837F] text-lg leading-6 mt-6 text-[#1A1A1A] cursor-pointer">Status Policy</p>
                        <p className="hover:text-[#81837F] text-lg leading-6 mt-6 text-[#1A1A1A] cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-[#81837F] text-lg leading-6 mt-6 text-[#1A1A1A] cursor-pointer">Terms of Service</p>
                    </div>
                    <div className="lg:block hidden">
                        <label className="text-xl font-medium leading-5 text-[#1A1A1A]">Get Updates</label>
                        <div className="flex items-center rounded mt-4">
                            <input type="text" className="text-lg w-full mr-[5px] p-4 leading-4 rounded focus:ring focus:ring-[#76A763] text-[#1A1A1A] placeholder-[#1A1A1A]" placeholder="Enter your email" />
                            <button className="cursor-pointer bg-[#76A763] text-white p-4 hover:bg-[#93B685] rounded border border-[#646464]">
                                <FaArrowRight size={21}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:hidden">
                    <label className="text-2xl font-semibold leading-5 text-[#1A1A1A]">Get Updates</label>
                    <div className="flex items-center rounded mt-4">
                        <input type="text" className="text-lg w-full mr-[5px] p-4 leading-4 relative z-0 rounded focus:ring focus:ring-[#76A763] text-[#1A1A1A] placeholder-[#1A1A1A]" placeholder="Enter your email" />
                        <button className="cursor-pointer relative z-40 bg-[#76A763] text-white p-4 hover:bg-[#93B685] rounded border border-[#646464]">
                            <FaArrowRight size={21}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}