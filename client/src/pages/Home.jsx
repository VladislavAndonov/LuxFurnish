import BestSellers from "../components/BestSellers";
import Carousel from "../components/Carousel";

export default function Home() {
    return (
        <div className="home-background">
            <div className="container mx-auto p-4 text-black h-[100vh]">
            </div>
            <BestSellers />
            <Carousel />
        </div>
    );
}