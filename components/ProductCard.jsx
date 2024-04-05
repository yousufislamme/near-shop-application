import React from "react";
import Button from "./Button";

const ProductCard = ({ productName, price, img, decs }) => {
  return (
    <div className=" border ">
      <img src={img} alt="productName" />
      <div className="px-2">
        <h2 className="text-lg font-semibold">{productName}</h2>
        <p className="font-semibold text-primary">${price}</p>
        <p>{decs}</p>
        <Button buttonText="Add to Cart" />
      </div>
    </div>
  );
};

export default ProductCard;
