import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import FurnitureListItem from "./products-list/FurnitureListItem";

import * as furnitureAPI from "../../api/furniture-api";


export default function Catalog() {
    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        const fetchFurniture = async () => {
            try {
                const result = await furnitureAPI.getAll();
                console.log("Fetched furniture data:", result);
                setFurniture(result);
            } catch (error) {
                console.error("Error fetching furniture data:", error);
            }
        };
    
        fetchFurniture();
    }, []);

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


            <div className="bg-gray-100 py-16">
                <FurnitureListItem furniture={furniture}/>
            </div>
        </>
    );
}




/*

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
                {furniture.map(product => <FurnitureListItem key={product._id} {...product} />)}
            </div>

        </>
    );
}
*/