import { useEffect, useState } from "react";
import { getAllProducts, getProductById } from "../api/data";


export function useGetAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAllProducts();
            setProducts(result);
        })();
    }, []);

    return [products, setProducts];
}

export function useGetOneProduct(productId) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getProductById(productId);

            setProduct(result);
        })();
    }, [productId]);

    return [product, setProduct];
}
