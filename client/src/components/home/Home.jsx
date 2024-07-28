// import BestSellers from "../components/BestSellers";
import TopSelling from "./top-selling/TopSelling";

export default function Home() {
    return (
        <>
            <div className="home-background">
                <div className="container mx-auto p-4 h-[100vh]"></div>
            </div>
            <div>
                <TopSelling />
            </div>
        </>
    );
}