import { useEffect, useState } from "react";
import furnitureAPI from "../api/furniture-api";

export function useGetAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = (async () => {
            const result = await furnitureAPI.getAll();
            setProducts(result);
        })();
    }, []);

    return [products, setProducts];
}

export function useGetOneProduct(productId) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const result = await furnitureAPI.getOne(productId);

            setProduct(result);
        })();
    }, [productId]);

    return [product, setProduct];
}
