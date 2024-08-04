import { useEffect, useState } from "react";
import furnitureAPI from "../../api/furniture-api";

export function useGetAllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = (async () => {
      try {
        const result = await furnitureAPI.getAll();
        console.log("Fetched product data:", result);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    })();
  }, []);

  return [products, setProducts];
}
