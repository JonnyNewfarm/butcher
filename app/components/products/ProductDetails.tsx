"use client";

import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import Button from "../Button";
import ProductDetailsImg from "./ProductDetailsImg";
import SetQuantity from "./SetQuantity";
import { useCart } from "@/hooks/useProductCart";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailProps {
  product: any;
}

export type ProductType = {
  id: string;
  name: string;
  description?: string;
  category?: string;
  selectedImage: selectedImageType;
  quantity: number;
  price?: number;
};

export type selectedImageType = {
  image: string;
};

const HR = () => {
  return <hr className="w-[80%] my-2" />;
};
const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
  const { handleAddToCart, cartProducts } = useCart();
  const [alreadyInCart, setAlreadyInCart] = useState(false);
  console.log(cartProducts);
  const [cartProduct, setCartProduct] = useState<ProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    selectedImage: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const ratingAverage =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  useEffect(() => {
    setAlreadyInCart(false);
    if (cartProducts) {
      const index = cartProducts.findIndex((item) => item.id === product.id);
      if (index > -1) {
        setAlreadyInCart(true);
      }
    }
  }, [cartProducts]);

  const handleImageSelector = useCallback(
    (value: selectedImageType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImage: value };
      });
    },
    [cartProduct.selectedImage]
  );

  const handleCartDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity-- };
    });
  }, [cartProduct]);

  const handleCartIncrease = useCallback(() => {
    if (cartProduct.quantity === 25) {
      return;
    }
    setCartProduct((next) => {
      return { ...next, quantity: next.quantity++ };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductDetailsImg
        handleImage={handleImageSelector}
        cartProduct={cartProduct}
        product={product}
      />
      <div>
        <h2 className="text-3xl font-medium">{product.name}</h2>
        <div className="flex gap-2 items-center">
          <Rating className="text-black" value={ratingAverage} readOnly />
          <div className="text-sm">{product.reviews.lenght} reviews</div>
        </div>
        <HR />
        <div className="text-justify">{product.description}</div>
        <HR />
        <div>
          <span className="font-semibold">Category:</span>
          {product.category}
        </div>
        <div className="flex gap-1">
          <p className="font-semibold">Inventory:</p>
          <div className={product.inStock ? "text-teal-600" : "text-red-600"}>
            {product.inStock ? "In stock" : "Out of stock"}
          </div>
        </div>

        <HR />
        {alreadyInCart ? (
          <>
            <p className="mb-2 flex items-center gap-1">
              <MdCheckCircle />
              <span>Product already add to cart</span>
            </p>
          </>
        ) : (
          <>
            <SetQuantity
              cartProduct={cartProduct}
              handleCartDecrease={handleCartDecrease}
              handleCartIncrease={handleCartIncrease}
            />
            <HR />
            <div className="justify-center flex mt-6">
              <Button
                label="Add to cart"
                onClick={() => handleAddToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
