import { FaChevronDown } from "react-icons/fa";
import { useGetAllProducts } from "../../hooks/useProducts";
import ProductsList from "./products-list/ProductsList";

export default function Products() {
    const [products] = useGetAllProducts();

    return (
        <>
            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center lg:h-[70vh] h-[35vh] lg:py-12 py-6 bg-cover bg-bottom bg-fixed" style={{ backgroundImage: 'url(/images/hero-images/products-bg.jpg)' }}>
                <div className="absolute inset-0 bg-white opacity-30"></div>
                <h1 className="relative font-bold lg:text-7xl text-5xl text-[#1A1A1A] z-10">
                    Explore Our Collection
                </h1>
                <p className="relative text-xl lg:text-2xl text-gray-800 mt-4 z-10">
                    Handpicked furniture for every corner of your home
                </p>
                <div className="relative animate-bounce mt-4 z-10 text-[#1A1A1A]">
                    <FaChevronDown size={30} />
                </div>
            </div>

            {/* Products Section */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    {products.length > 0 ? (
                        <ProductsList products={products} />
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="font-manrope font-bold text-4xl text-[#1A1A1A] mb-8">
                                No products yet...
                            </h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
