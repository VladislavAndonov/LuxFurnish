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
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

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
            setLatestProducts(result.reverse().slice(0, 6));
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
                <div className="relative flex items-center justify-center group">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-4 md:left-10 focus:outline-none cursor-pointer transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <IoIosArrowDropleftCircle size={50} className="text-[#76A763]" />
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
                                                <h6 className="font-semibold text-2xl text-[#76A763]">
                                                    € {product.price}
                                                </h6>
                                            </div>
                                            <p className="text-gray-600 text-md mb-6">
                                                {product.description.slice(0, 70)}...
                                            </p>
                                        </div>

                                        <div className="mt-6 flex justify-center items-center">
                                            <Link to={`/products/${product._id}`} className="flex w-full items-center justify-center bg-[#76A763] text-xl text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#93B685] transition-all duration-500 ease-in-out">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-4 md:right-10 focus:outline-none cursor-pointer transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <IoIosArrowDroprightCircle size={50} className="text-[#76A763]" />
                    </ButtonNext>
                </div>
                <DotGroup className="flex justify-center mt-4" />
            </CarouselProvider>
        </div>
    );
}
