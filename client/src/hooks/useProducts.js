import { useEffect, useState } from "react";
import { getAllFurniture, getFurnitureById } from "../api/data";


export function useGetAllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAllFurniture();
            setProducts(result);
        })();
    }, []);

    return [products, setProducts];
}

export function useGetOneProduct(productId) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getFurnitureById(productId);

            setProduct(result);
        })();
    }, [productId]);

    return [product, setProduct];
}
