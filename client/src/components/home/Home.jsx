// import BestSellers from "../components/BestSellers";
import TopSelling from "./top-selling/TopSelling";

export default function Home() {
    return (
        <>
            <div className="home-background"></div>
            {/* <div className="container mx-auto p-4"></div> */}
            <div>
                <TopSelling />
            </div>
        </>
    );
}