import { FaChevronDown } from "react-icons/fa";
import Filter from "./filter/Filter";


export default function Catalog() {
    return (
        <>
            <div className="flex flex-col items-center justify-center lg:gap-10 gap-4 lg:h-[50vh] h-[35vh] lg:py-8 py-4 lg:text-6xl text-5xl bg-[#D7DAD3]">
                <h1 className=" font-medium mt-[2em]">
                    Catalog
                </h1>
                <div>
                    <FaChevronDown size={25} />
                </div>
            </div>
            <div className="">
                <Filter />
            </div>
        </>
    );
}