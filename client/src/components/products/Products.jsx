import { FaChevronDown } from "react-icons/fa";
import { useGetAllProducts } from "../../hooks/useProducts";
import ProductsList from "./products-list/ProductsList";

export default function Products() {
    const [products, setProducts] = useGetAllProducts();

    return (
        <>
            <div className="flex flex-col items-center justify-center lg:gap-10 gap-4 lg:h-[50vh] h-[35vh] lg:py-8 py-4 bg-[#D7DAD3]">
                <h1 className="font-semibold mt-[2em] lg:text-6xl text-5xl">
                    Products
                </h1>
                <div className="animate-bounce mt-4">
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