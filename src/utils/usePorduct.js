import { useState, useEffect } from "react";
import { Base_URL } from "./Constants";
import axios from "axios";

const useProduct = (limit = 10, skip = 0) => {
  const [resProduct, setProduct] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [limit, skip]); 

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${Base_URL}products?limit=${limit}&skip=${skip}`);
      if (response.status === 200) {
        setProduct(response.data.products);
        setTotalProducts(response.data.total);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return { products: resProduct, totalProducts };
};

export default useProduct;