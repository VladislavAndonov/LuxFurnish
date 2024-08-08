import { FaChevronDown } from "react-icons/fa";
import { useGetAllProducts } from "../../hooks/useProducts";
import ProductsList from "./products-list/ProductsList";

export default function Products() {
    const [ products ] = useGetAllProducts();

    return (
        <>
            <div className="relative flex flex-col items-center justify-center lg:h-[60vh] h-[30vh] lg:py-8 py-4 bg-cover bg-bottom bg-fixed" style={{ backgroundImage: 'url(/images/hero-images/products-hero-resized.png)' }}>
                <div className="absolute inset-0 bg-[#D7DAD3] opacity-30"></div>
                <h1 className="relative font-bold lg:text-6xl text-4xl text-black z-10">
                    About Us
                </h1>
                <div className="relative animate-bounce mt-4 z-10 text-black">
                    <FaChevronDown size={25} />
                </div>
            </div>


            <div className="bg-gray-100">
                {products.length > 0 ? (
                    <ProductsList products={products} />
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