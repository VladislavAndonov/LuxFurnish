import { FaChevronDown } from 'react-icons/fa';
import { FaCouch, FaLightbulb, FaStar, FaHeadset } from 'react-icons/fa';

export default function AboutUs() {
    return (
        <>
            <div className="relative flex flex-col items-center justify-center lg:h-[70vh] h-[35vh] lg:py-12 py-6 bg-cover bg-bottom bg-fixed" style={{ backgroundImage: 'url(/images/hero-images/about-bg.jpg)' }}>
                <div className="absolute inset-0 bg-white opacity-50"></div>
                <h1 className="relative font-bold lg:text-7xl text-5xl text-[#1A1A1A] z-10">
                    Our Story
                </h1>
                <p className="relative text-xl lg:text-2xl text-gray-800 mt-4 z-10">
                    Crafting comfort and elegance for your home, one piece at a time.
                </p>
                <div className="relative animate-bounce mt-4 z-10 text-[#1A1A1A]">
                    <FaChevronDown size={30} />
                </div>
            </div>

            <section id="about-company" className="py-12 bg-[#1A1A1A] text-white">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                            <h2 className="text-4xl font-bold text-[#76A763] mb-6 text-center md:text-left">Our Story and Vision</h2>
                            <p className="text-lg mb-6">
                                At Lux Furnish, we redefine luxury in the world of furniture. Founded with a passion for elegance and craftsmanship, we blend tradition with innovation to create exceptional pieces that enhance your living spaces. Our mission is to provide unparalleled quality and design, ensuring that every product we offer is a testament to sophistication and style.
                            </p>
                            <p className="text-lg mb-6">
                                Our journey began with a simple idea: to transform ordinary living spaces into extraordinary experiences. With years of experience in the furniture industry, we have honed our skills and expanded our vision to cater to discerning customers who seek more than just furniture - they seek a lifestyle.
                            </p>
                            <p className="text-lg mb-6">
                                We believe that furniture is not just about function, but about creating a harmonious environment that reflects your unique taste and personality. Our collections are inspired by timeless elegance and modern trends, resulting in designs that are both classic and contemporary. Each piece is a fusion of art and practicality, meticulously crafted to meet the highest standards of quality and comfort.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/images/about-img2.jpg"
                                alt="Our Company"
                                className="max-h-[80vh] w-auto m-auto rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="what-we-offer" className="py-12 bg-cover bg-[#D7DAD3]">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-[#1A1A1A] mb-8">What Makes Us Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaCouch size={48} className="text-[#76A763] mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Quality Furniture</h3>
                            <p className="text-lg text-gray-600">
                                Our furniture is crafted with the finest materials and meticulous attention to detail. We ensure that each piece offers both durability and elegance, providing you with furniture that stands the test of time.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaLightbulb size={48} className="text-[#76A763] mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Innovative Design</h3>
                            <p className="text-lg text-gray-600">
                                We pride ourselves on our cutting-edge designs that combine modern aesthetics with functional excellence. Our innovative approach ensures that every piece is not only stylish but also practical and comfortable.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaStar size={48} className="text-[#76A763] mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Exclusive Collections</h3>
                            <p className="text-lg text-gray-600">
                                Explore our exclusive collections that feature unique designs and limited editions. Our carefully curated selections offer you an opportunity to own exceptional pieces that are truly one-of-a-kind.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <FaHeadset size={48} className="text-[#76A763] mb-4 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-4">Free Consulting</h3>
                            <p className="text-lg text-gray-600">
                                Our expert consultants are here to help you choose the perfect pieces for your space. We offer personalized advice and design solutions to ensure that your furniture meets your needs and enhances your home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="our-mission" className="py-12 bg-gray-100">
                <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="/images/about-img1.jpg"
                            alt="Our Mission"
                            className="max-h-[80vh] w-auto m-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <h2 className="text-4xl font-bold text-center md:text-left mb-8 text-[#76A763]">Our Commitment to Excellence</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            At Lux Furnish, our mission is to elevate the art of living through luxurious, handcrafted furniture. We are dedicated to bringing unparalleled quality, innovation, and style to every home, ensuring that our creations enrich your living environment and provide lasting value.
                        </p>
                        <p className="text-lg text-gray-700 mb-8">
                            Our commitment extends beyond exceptional craftsmanship. We strive to offer a personalized experience for each of our clients, with a focus on excellence in design and service. Join us on a journey to create beautiful spaces that reflect your unique taste and lifestyle.
                        </p>
                        <p className="text-lg text-gray-700">
                            Discover the essence of luxury with Lux Furnish and experience the perfect blend of tradition, innovation, and timeless elegance. Join us on our journey as we continue to set new standards in the world of luxury furniture, and let us help you create a space that is truly your own. We are committed to excellence and dedicated to bringing you furniture that will be cherished for generations to come.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}




// <section id="about-company" className="py-12 bg-[#1A1A1A] text-white">
//                 <div className="container mx-auto">
//                     <div className="flex flex-col md:flex-row xl:mx-[180px] items-center">
//                         <div className="md:w-1/2 mb-8 mx-8 2xl:px-16 md:mb-0">
//                             <h2 className="text-4xl font-bold text-[#468c65] mb-6 text-center md:text-left">Our Story and Vision</h2>
//                             <p className="text-lg mb-6">
//                                 At Lux Furnish, we redefine luxury in the world of furniture. Founded with a passion for elegance and craftsmanship, we blend tradition with innovation to create exceptional pieces that enhance your living spaces. Our mission is to provide unparalleled quality and design, ensuring that every product we offer is a testament to sophistication and style.
//                             </p>
//                             <p className="text-lg mb-6">
//                                 Our journey began with a simple idea: to transform ordinary living spaces into extraordinary experiences. With years of experience in the furniture industry, we have honed our skills and expanded our vision to cater to discerning customers who seek more than just furniture - they seek a lifestyle.
//                             </p>
//                             <p className="text-lg mb-6">
//                                 We believe that furniture is not just about function, but about creating a harmonious environment that reflects your unique taste and personality. Our collections are inspired by timeless elegance and modern trends, resulting in designs that are both classic and contemporary. Each piece is a fusion of art and practicality, meticulously crafted to meet the highest standards of quality and comfort.
//                             </p>
//                         </div>
//                         <div className="lg:w-1/2 m-auto">
//                             <img
//                                 src="/images/about-img2.jpg"
//                                 alt="Our Company"
//                                 className="max-h-[90vh] w-auto rounded-lg shadow-lg"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </section>