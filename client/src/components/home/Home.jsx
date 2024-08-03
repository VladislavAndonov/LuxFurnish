import { useEffect, useState } from "react";
import furnitureAPI from "../../api/furniture-api"
import TopProducts from "./top-products/TopProducts";

export default function Home() {
        const [topProducts, setTopProducts] = useState([]);

        useEffect(() => {
            try {
                (async () => {
                    const result = await furnitureAPI.getAll();
                    //TODO: modify to fetch only top selling furniture
                    setTopProducts(result.reverse().slice(3));


                })()
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        }, [])

        return (
            <>
                <div className="home-background"></div>
                {/* <div className="container mx-auto p-4"></div> */}
                <div>
                    {topProducts.length > 0 ? (
                        <TopProducts topProducts={topProducts} />
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="font-manrope font-bold text-4xl text-black mb-8">
                                No products yet...
                            </h2>
                        </div>
                    )}
                </div>
            </>
        );
    }