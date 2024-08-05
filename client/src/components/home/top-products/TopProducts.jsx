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

export default function TopProducts({ topProducts }) {
    const getVisibleSlides = () => {
        if (window.innerWidth < 640) return 1; // Small screens
        if (window.innerWidth < 1024) return 2; // Medium screens
        return 3; // Large screens
    };

    const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides);

    useEffect(() => {
        const handleResize = () => setVisibleSlides(getVisibleSlides);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-8 pb-16 pt-16 px-4 lg:px-8">
            <CarouselProvider
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={topProducts.length}
                visibleSlides={visibleSlides}
                step={1}
                infinite={true}
                className="w-full"
            >
                <div className="relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-4 md:left-10 focus:outline-none cursor-pointer">
                        <svg width={60} height={60} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-hidden px-4 md:px-8">
                        <Slider>
                            {topProducts.map(product => (
                                <Slide index={product._id} key={product._id}>
                                    <Link
                                        to={`/products/${product._id}`}
                                        className="flex flex-shrink-0 relative w-auto mx-2 md:mx-4 group cursor-pointer bg-white transition-all duration-500 rounded-xl shadow-lg"
                                    >
                                        <img src={`/images/product-images/${product.image}`} alt={product.name} className="object-cover h-[60vh] w-full rounded-xl" />
                                        <div className="absolute bottom-0 w-full p-5 bg-black bg-opacity-50 text-white flex justify-between items-center text-sm lg:text-lg font-semibold leading-5 lg:leading-6 rounded-b-xl">
                                            <div>{product.name}</div>
                                            <div>€{product.price}.00</div>
                                        </div>
                                    </Link>
                                </Slide>
                            ))}
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-4 md:right-10 focus:outline-none cursor-pointer">
                        <svg width={60} height={60} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
                <DotGroup className="flex justify-center mt-4" />
            </CarouselProvider>
        </div>
    );
}
