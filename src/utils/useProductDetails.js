import {useState, useEffect} from "react";
import {Base_URL} from "./Constants";
import axios from "axios";

const useProductDetails=(productId)=>{
    const [resProductDetails, setProductDetails]= useState([])
    useEffect(()=>{
        fetchProductDetails()
    },[])


    const fetchProductDetails = async () => {
        try {
          const response = await axios.get(Base_URL + `products/${productId}`);
          console.log("response ProductDetails:---", response);
          if(response.status ==200){
            setProductDetails(response.data);
          }
         
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
    
      return resProductDetails;
    };
    
export default useProductDetails;