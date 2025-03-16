"use client";

import { BsPlusSquare, BsSubtract } from "react-icons/bs";
import { ProductType } from "./ProductDetails";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

interface setQuantityProps {
  cartCounter?: boolean;
  cartProduct: ProductType;
  handleCartIncrease: () => void;
  handleCartDecrease: () => void;
}

const SetQuantity = ({
  cartCounter,
  cartProduct,
  handleCartDecrease,
  handleCartIncrease,
}: setQuantityProps) => {
  return (
    <div className="flex gap-8 items-center pt-5">
      {cartCounter ? null : <div className="font-semibold">Quantity:</div>}
      <div className="flex gap-4 items-center text-base">
        <button onClick={handleCartDecrease}>
          <CiSquareMinus size={35} />
        </button>
        <div>{cartProduct.quantity}</div>
        <button onClick={handleCartIncrease}>
          <CiSquarePlus size={35} />
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
