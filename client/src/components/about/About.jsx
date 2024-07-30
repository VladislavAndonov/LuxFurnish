import { FaChevronDown } from 'react-icons/fa'

export default function About() {
    return (
        <>
            <div className="flex flex-col items-center justify-center lg:gap-10 gap-4 lg:h-[50vh] h-[35vh] lg:py-8 py-4 bg-[#D7DAD3]">
                <h1 className="font-semibold mt-[2em] lg:text-6xl text-5xl">
                    About Us
                </h1>
                <div className="animate-bounce mt-4">
                    <FaChevronDown size={25} />
                </div>
            </div>

            <section id="about-company" className="py-16 bg-[#1A1A1A]">
                <div className="container mx-auto px-4">

                    <div className="flex flex-col md:flex-row items-center">


                        <div className="md:w-1/2 md:pr-8 md:pb-[4em]">
                            <h2 className="text-4xl font-bold text-[#468c65] text-center mb-[2em]">Our Story and Vision</h2>
                            <p className="text-lg text-[#D7DAD3] mb-8">
                                At Lux Furnish, we redefine luxury in the world of furniture. Founded with a passion for elegance and craftsmanship, we blend tradition with innovation to create exceptional pieces that enhance your living spaces. Our mission is to provide unparalleled quality and design, ensuring that every product we offer is a testament to sophistication and style.
                            </p>
                            <p className="text-lg text-[#D7DAD3] mb-8">
                                Our journey began with a simple idea: to transform ordinary living spaces into extraordinary experiences. With years of experience in the furniture industry, we have honed our skills and expanded our vision to cater to discerning customers who seek more than just furniture - they seek a lifestyle.
                            </p>
                            <p className="text-lg text-[#D7DAD3] mb-8">
                                We believe that furniture is not just about function, but about creating a harmonious environment that reflects your unique taste and personality. Our collections are inspired by timeless elegance and modern trends, resulting in designs that are both classic and contemporary. Each piece is a fusion of art and practicality, meticulously crafted to meet the highest standards of quality and comfort.
                            </p>
                        </div>

                        <div className="md:w-1/2 md:mb-0">
                            <img
                                src="/images/about-img2.jpg"
                                alt="Our Company"
                                className="h-[80vh] w-auto md:ml-[8em] rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section id="what-we-offer" className="py-16 bg-[#D7DAD3]">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center py-[1.2em]">What Makes Us Different</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Quality Furniture</h3>
                            <p className="text-gray-700">
                                Our furniture is crafted with the finest materials and meticulous attention to detail. We ensure that each piece offers both durability and elegance, providing you with furniture that stands the test of time.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Innovative Design</h3>
                            <p className="text-gray-700">
                                We pride ourselves on our cutting-edge designs that combine modern aesthetics with functional excellence. Our innovative approach ensures that every piece is not only stylish but also practical and comfortable.
                            </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Exclusive Collections</h3>
                            <p className="text-gray-700">
                                Explore our exclusive collections that feature unique designs and limited editions. Our carefully curated selections offer you an opportunity to own exceptional pieces that are truly one-of-a-kind.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4">Free Consulting</h3>
                            <p className="text-gray-700">
                                Our expert consultants are here to help you choose the perfect pieces for your space. We offer personalized advice and design solutions to ensure that your furniture meets your needs and enhances your home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="our-mission" className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="/images/about-img1.jpg"
                            alt="Our Mission"
                            className="h-[80vh] w-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pr-8 md:pb-[8em]">
                        <h2 className="text-4xl font-bold text-center mb-[2em]">Our Commitment to Excellence</h2>
                        <p className="text-lg text-gray-700  mb-8">
                            At Lux Furnish, our mission is to elevate the art of living through luxurious, handcrafted furniture. We are dedicated to bringing unparalleled quality, innovation, and style to every home, ensuring that our creations enrich your living environment and provide lasting value.
                        </p>
                        <p className="text-lg text-gray-700  mb-8">
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


{/* <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </div>
        <div className="w-full lg:w-8/12 ">
            <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
        </div>
    </div>

    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Img" />
                    <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Img" />
                    <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Alexa</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Img" />
                    <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Img" />
                    <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Olivia</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Img" />
                    <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Img" />
                    <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Liam</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured img" />
                    <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured img" />
                    <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Elijah</p>
                </div>
            </div>
        </div>
    </div>
</div> */}