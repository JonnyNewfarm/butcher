"use client";
import { ProductType } from "@/app/components/products/ProductDetails";
import { createContext, useCallback, useContext, useState } from "react";

type ProductCartContextType = {
  totalQuantity: number;
  cartProducts: ProductType[] | null;
  handleAddToCart: (product: ProductType) => void;
};

export const ProductCartContext = createContext<ProductCartContextType | null>(
  null
);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [totalQuantity, setTotalQuantity] = useState(10);
  const [cartProducts, setCartProducts] = useState<ProductType[] | null>(null);

  const handleAddToCart = useCallback((product: ProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      return updatedCart;
    });
  }, []);

  const cartValue = {
    totalQuantity,
    cartProducts,
    handleAddToCart,
  };

  return <ProductCartContext.Provider value={cartValue} {...props} />;
};

export const useCart = () => {
  const context = useContext(ProductCartContext);

  if (context === null) {
    throw new Error("usecart does not work outside the cartContextProvider");
  }

  return context;
};
