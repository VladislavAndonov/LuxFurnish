import { FaChevronDown } from "react-icons/fa";
import ProductsList from "./products-list/ProductsList";
import { useEffect, useState } from "react";
// import Filter from "./filter/Filter";

import * as furnitureAPI from "../../api/furniture-api";


export default function Catalog() {
    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        (async () => {
                furnitureAPI.getAll()
                .then(result => setFurniture(result));
            })();
    }, [])

    return (
        <>
            <div className="flex flex-col items-center justify-center lg:gap-10 gap-4 lg:h-[50vh] h-[35vh] lg:py-8 py-4 bg-[#D7DAD3]">
                <h1 className="font-semibold mt-[2em] lg:text-6xl text-5xl">
                    Catalog
                </h1>
                <div className="animate-bounce mt-4">
                    <FaChevronDown size={25} />
                </div>
            </div>
            <div className="bg-white py-16">
                <ProductsList />
            </div>
        </>
    );
}