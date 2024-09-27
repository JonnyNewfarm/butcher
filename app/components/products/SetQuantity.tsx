"use client";

import { ProductType } from "./ProductDetails";

interface setQuantityProps {
  cartCounter?: boolean;
  cartProduct: ProductType;
  handleCartIncrease: () => void;
  handleCartDecrease: () => void;
}
const buttonStyles = "border-[1.2px] px-2 rounded";

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
        <button className={buttonStyles} onClick={handleCartDecrease}>
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button className={buttonStyles} onClick={handleCartIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
