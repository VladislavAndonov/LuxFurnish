import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    DotGroup,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import furnitureAPI from '../../../api/furniture-api';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

export default function LatestProducts() {
    const getVisibleSlides = () => {
        if (window.innerWidth < 640) return 1; // Small screens
        if (window.innerWidth < 1024) return 2; // Medium screens
        return 3; // Large screens
    };
    const [latestProducts, setLatestProducts] = useState([]);
    const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides());

    useEffect(() => {
        const handleResize = () => setVisibleSlides(getVisibleSlides());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        fetchLatestProducts();
    }, []);

    const fetchLatestProducts = async () => {
        try {
            const result = await furnitureAPI.getAll();
            setLatestProducts(result.reverse().slice(0, 5));
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-8 px-4 lg:px-8">
            <CarouselProvider
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={latestProducts.length}
                visibleSlides={visibleSlides}
                step={1}
                infinite={true}
                className="w-full"
            >
                <div className="relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute text-white z-30 left-4 md:left-10 focus:outline-none cursor-pointer transform -translate-y-1/2">
                        <svg width={80} height={80} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-hidden px-4 md:px-8">
                        <Slider>
                            {latestProducts.map(product => (
                                <Slide index={product._id} key={product._id}>
                                    <div className="relative bg-[#D7DAD3] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mx-2 md:mx-4">
                                        <Link to={`/products/${product._id}`} className="block">
                                            <div className="relative cursor-pointer">
                                                <img
                                                    src={`/images/product-images/${product.image}`}
                                                    alt={`${product.title} image`}
                                                    className="w-full h-auto aspect-1 object-cover rounded-xl"
                                                />
                                            </div>
                                        </Link>

                                        <div className="mt-6">
                                            <h6 className="font-semibold text-2xl text-black mb-2">
                                                {product.title}
                                            </h6>
                                            <div className="flex items-center justify-between mb-4">
                                                <h6 className="font-semibold text-xl text-[#76A763]">
                                                    € {product.price}
                                                </h6>
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, index) => (
                                                        <FaStar
                                                            key={index}
                                                            className={`text-[#FFC107] ${index < product.rating ? "text-yellow-400" : "text-gray-300"}`}
                                                            size={16}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-[#656565] text-md mb-6">
                                                {product.description.slice(0, 80)}...
                                            </p>
                                        </div>

                                        <div className="mt-4 flex justify-between items-center">
                                            <button className="flex items-center justify-center bg-[#76A763] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#93B685] transition-colors duration-200 ease-in-out">
                                                <AiOutlineShoppingCart size={20} className="mr-2" />
                                                Add to Cart
                                            </button>
                                            <Link to={`/products/${product._id}`} className="text-[#76A763] hover:text-[#93B685] transition-colors duration-200 ease-in-out">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-4 md:right-10 focus:outline-none cursor-pointer transform -translate-y-1/2">
                        <svg width={80} height={80} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
                <DotGroup className="flex justify-center mt-4" />
            </CarouselProvider>
        </div>
    );
}
