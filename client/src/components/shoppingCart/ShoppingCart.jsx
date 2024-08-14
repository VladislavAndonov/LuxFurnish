import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const handleQuantityChange = (id, action) => {
        const updatedCart = cartItems.map(item =>
            item.id === id
                ? { ...item, quantity: action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
                : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemoveItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
                    Shopping Cart
                </h2>

                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <div key={item.id} className="rounded-xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
                            <div className="col-span-12 lg:col-span-2 img box">
                                <img src={item.imageUrl} alt={item.name} className="max-lg:w-full lg:w-[240px] rounded-md" />
                            </div>
                            <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                                <div className="flex items-center justify-between w-full mb-4">
                                    <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                                        {item.name}
                                    </h5>
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="flex items-center justify-center text-red-600 hover:text-red-800 transition-colors duration-300"
                                    >
                                        <FaTrashAlt size={22} />
                                    </button>
                                </div>
                                <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                                    {item.description}
                                </p>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-full">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, "decrease")}
                                                className="group py-4 px-4 border border-gray-300 rounded-l-xl bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-sm"
                                            >
                                                <FaMinus size={18} />
                                            </button>
                                            <input
                                                type="text"
                                                readOnly
                                                value={item.quantity}
                                                className="font-semibold text-gray-900 cursor-pointer text-lg py-[11px] px-4 w-full sm:max-w-[118px] outline-0 border-y border-gray-300 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                                            />
                                            <button
                                                onClick={() => handleQuantityChange(item.id, "increase")}
                                                className="group py-4 px-4 border border-gray-300 rounded-r-xl bg-white transition-all duration-300 hover:bg-gray-100 hover:shadow-sm"
                                            >
                                                <FaPlus size={18} />
                                            </button>
                                        </div>
                                    </div>
                                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                                        ${item.price * item.quantity}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">Your cart is empty.</p>
                )}

                <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
                    <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
                        Subtotal
                    </h5>
                    <div className="flex items-center justify-between gap-5">
                        <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
                            Promo Code?
                        </button>
                        <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">
                            ${calculateTotalPrice()}
                        </h6>
                    </div>
                </div>

                <div className="max-lg:max-w-lg max-lg:mx-auto">
                    <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
                        Shipping, taxes, and discounts calculated at checkout
                    </p>
                    <button className="rounded-xl py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700">
                        Continue Shopping
                    </button>
                </div>
            </div>
        </section>
    );
}
