export default function FurnitureListItem({ furniture }) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
                    Product list
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {furniture.map((product) => (
                        <a
                            key={product._id}
                            href="#"
                            className="mx-auto sm:mr-0 group cursor-pointer lg:mx-auto bg-gray-100 transition-all duration-500"
                        >
                            <div>
                                <img
                                    src={product.image}
                                    alt={`${product.name} image`}
                                    className="w-full aspect-square rounded-2xl"
                                />
                            </div>
                            <div className="mt-5">
                                <div className="flex items-center justify-between">
                                    <h6 className="font-semibold text-xl leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
                                        {product.name}
                                    </h6>
                                    <h6 className="font-semibold text-xl leading-8 text-indigo-600">
                                        €{product.price}
                                    </h6>
                                </div>
                                <p className="mt-2 font-normal text-sm leading-6 text-gray-500">
                                    {product.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}