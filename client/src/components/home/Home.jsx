import { FaChevronDown, FaStar, FaShippingFast, FaRegHandshake, FaHandsHelping } from 'react-icons/fa';
import LatestProducts from "./latest-products/LatestProducts";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center lg:h-[100vh] h-[50vh] lg:py-12 py-6 bg-cover bg-bottom bg-fixed" style={{ backgroundImage: 'url(/images/hero-images/home-bg-hq.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <h1 className="relative font-bold lg:text-7xl text-5xl text-[#D7DAD3] z-10">
                    Welcome to Lux Furnish
                </h1>
                <p className="relative mt-4 text-xl lg:text-2xl text-gray-300 text-center z-10">
                    Discover the essence of luxury with our exclusive furniture collections
                </p>
                <div className="relative animate-bounce mt-4 z-10 text-white">
                    <FaChevronDown size={30} />
                </div>
            </div>

            {/* Top Products Section */}
            <section id="latest-products" className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className='text-4xl font-bold text-center text-[#1A1A1A] mb-8'>
                        Latest Products
                    </h2>
                    <LatestProducts />
                </div>
            </section>

            {/* Our Promise Section */}
            <section id="our-promise" className="py-12 bg-[#1A1A1A]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">Our Promise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[#2C2C2C] text-white p-6 rounded-lg shadow-lg text-center">
                            <FaStar size={48} className="text-[#76A763] mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
                            <p className="text-lg text-gray-300">
                                We ensure each piece is crafted with the finest materials for lasting elegance.
                            </p>
                        </div>
                        <div className="bg-[#2C2C2C] text-white p-6 rounded-lg shadow-lg text-center">
                            <FaShippingFast size={48} className="text-[#76A763] mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Fast Shipping</h3>
                            <p className="text-lg text-gray-300">
                                Experience quick and reliable delivery with our trusted shipping partners.
                            </p>
                        </div>
                        <div className="bg-[#2C2C2C] text-white p-6 rounded-lg shadow-lg text-center">
                            <FaRegHandshake size={48} className="text-[#76A763] mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Customer Satisfaction</h3>
                            <p className="text-lg text-gray-300">
                                Your happiness is our priority. We offer top-notch customer service.
                            </p>
                        </div>
                        <div className="bg-[#2C2C2C] text-white p-6 rounded-lg shadow-lg text-center">
                            <FaHandsHelping size={48} className="text-[#76A763] mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
                            <p className="text-lg text-gray-300">
                                We are committed to sustainable practices for a better future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Collection Section */}
            <section id="featured-collection" className="py-12 bg-cover"style={{ backgroundImage: 'url(/images/hero-images/shop-background.jpg)' }}>
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-[#1A1A1A] mb-8">Featured Collection</h2>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                            <img src="/images/featured-section.jpg" alt="Featured Collection" className="max-h-[60vh] w-auto rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4">Elegant Living Room Sets</h3>
                            <p className="text-lg text-black mb-4">
                                Discover our latest collection of elegant living room sets that combine style and comfort. Each piece is designed to enhance your living space with timeless beauty and modern functionality.
                            </p>
                            <p className="text-lg text-black mb-4">
                                Our living room sets are crafted with attention to detail, ensuring high quality and durability. Experience the perfect blend of luxury and practicality with our exclusive collection.
                            </p>
                            <button className="mt-4 px-8 py-2 bg-[#76A763] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#93B685] transition-all duration-500 ease-in-out">
                                <Link to="/products" >
                                    Shop Now
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Reviews Section */}
            <section id="customer-reviews" className="py-12 bg-[#1A1A1A] text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-white mb-8">Customer Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg text-center">
                            <p className="text-lg mb-4">
                                "Lux Furnish has completely transformed my living room. The quality and design of their furniture are unmatched. Highly recommended!"
                            </p>
                            <h4 className="text-xl font-semibold">- Sarah J.</h4>
                        </div>
                        <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg text-center">
                            <p className="text-lg mb-4">
                                "Exceptional customer service and fast delivery. The furniture is beautiful and very well made. I will definitely shop here again."
                            </p>
                            <h4 className="text-xl font-semibold">- Mark T.</h4>
                        </div>
                        <div className="bg-[#2C2C2C] p-6 rounded-lg shadow-lg text-center">
                            <p className="text-lg mb-4">
                                "I love my new dining set from Lux Furnish. It's stylish, comfortable, and fits perfectly in my home. Great experience overall!"
                            </p>
                            <h4 className="text-xl font-semibold">- Emily R.</h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
