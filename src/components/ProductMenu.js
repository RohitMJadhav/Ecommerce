import React from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../utils/useProductDetails";
import ImagesDetails from "./ImagesDetails";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa6";
import Loader from "./Loader";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom/dist";

function ProductMenu() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const productDetails = useProductDetails(productId);

  if (productDetails.length === 0) {
    return <Loader />;
  }

  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    brand,
    category,
    images,
  } = productDetails;

  return (
    <>
      <div className="text-center">
        <div className=" border border-b-gray-200 w-6/12 mx-auto  text-start my-5 p-4">
          <div className="py-4">
            <IoArrowBackCircleSharp
              size={30}
              className="cursor-pointer "
              onClick={() => navigate(-1)}
            />
          </div>
          <b>{title}</b>

          <div className="flex flex-wrap">
            {images &&
              images.length > 0 &&
              images.map((img, index) => (
                <div key={index} className="w-1/4 p-2">
                  <ImagesDetails image={img} />
                </div>
              ))}
          </div>

          <p className="text-sm">{description}</p>
          <div>
            <b>{price} $</b>
          </div>
          <div className="flex gap-2">
            <p>{discountPercentage}</p>
            <RiDiscountPercentFill size={18} className="text-yellow-600" />{" "}
          </div>
          <div className="flex gap-2">
            <p>{rating}</p>
            <FaStar size={16} className="text-green-600" />
          </div>
          <p className="text-sm">{brand}</p>
          <p className="text-sm">{category}</p>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default ProductMenu;
