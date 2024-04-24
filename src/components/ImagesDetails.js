import React from "react";

function ImagesDetails(img) {
  return (
    <>
      <img
        alt="products"
        src={img.image}
        className="rounded-lg mr-4 mb-4"
        style={{ height: "100%", width: "80%" }}
      />
    </>
  );
}

export default ImagesDetails;
