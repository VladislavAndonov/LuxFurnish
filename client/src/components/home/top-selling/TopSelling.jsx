import { useState, useEffect } from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function TopSelling() {
    const slides = [
        { id: 0, src: "https://i.ibb.co/fDngH9G/carosel-1.png", alt: "black chair and white table", title: "Catalog 1", description: "Minimal Interior" },
        { id: 1, src: "https://i.ibb.co/DWrGxX6/carosel-2.png", alt: "sitting area", title: "Catalog 2", description: "Minimal Interior" },
        { id: 2, src: "https://i.ibb.co/tCfVky2/carosel-3.png", alt: "sitting area", title: "Catalog 2", description: "Minimal Interior" },
        { id: 3, src: "https://i.ibb.co/rFsGfr5/carosel-4.png", alt: "sitting area", title: "Catalog 2", description: "Minimal Interior" },
    ];

    const getVisibleSlides = () => {
        if (window.innerWidth < 640) return 1; // Small screens
        if (window.innerWidth < 1024) return 2; // Medium screens
        return 4; // Large screens
    };

    const [visibleSlides, setVisibleSlides] = useState(getVisibleSlides);

    useEffect(() => {
        const handleResize = () => setVisibleSlides(getVisibleSlides);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="h-[100%] flex flex-col items-center justify-center gap-[4em] pb-[8em] pt-[4em]">
            <h2 className='text-white text-4xl font-semibold'>
                Top Selling
            </h2>
            <CarouselProvider
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={slides.length}
                visibleSlides={visibleSlides}
                step={1}
                infinite={true}
            >
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none cursor-pointer">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                {slides.map(slide => (
                                    <Slide index={slide.id} key={slide.id}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={slide.src} alt={slide.alt} className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{slide.title}</h2>
                                                <div className="flex h-full items-end pb-6">
                                                    <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{slide.description}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slide>
                                ))}
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none cursor-pointer">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    );
}