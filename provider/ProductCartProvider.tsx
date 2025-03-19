"use client";
import { CartContextProvider } from "@/hooks/useProductCart";

interface CartProviderProps {
  children: React.ReactNode;
}

const ProductCartProvider = ({ children }: CartProviderProps) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default ProductCartProvider;
