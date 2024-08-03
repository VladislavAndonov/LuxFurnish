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
        <div className="h-[100%] flex flex-col items-center justify-center gap-[4em] pb-[8em] pt-[4em] px-4 lg:px-8">
            <h2 className='text-white text-4xl font-semibold'>
                Top Selling
            </h2>
            <CarouselProvider
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={topProducts.length}
                visibleSlides={visibleSlides}
                step={1}
                infinite={true}
                className="w-full"
            >
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none cursor-pointer">
                        <svg width={50} height={50} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-hidden">
                        <Slider>
                            {topProducts.map(product => (
                                <Slide index={product._id} key={product._id}>
                                    <Link
                                        to={`/products/${product._id}`}
                                        className="flex flex-shrink-0 relative w-full sm:w-auto mx-2 lg:mx-4 group cursor-pointer bg-gray-100 transition-all duration-500"
                                    >
                                        <img src={`/images/product-images/${product.image}`} alt={product.name} className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6 rounded-lg">
                                            <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{product.name}</h2>
                                            <div className="flex h-full items-end pb-6">
                                                <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{product.description}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                </Slide>
                            ))}
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none cursor-pointer">
                        <svg width={50} height={50} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
                <DotGroup className="flex justify-center mt-4" />
            </CarouselProvider>
        </div>
    );
}
