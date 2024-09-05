import Container from "@/app/components/Container";
import ProductDetails from "@/app/components/products/ProductDetails";
import { product } from "@/utils/product";

interface Params {
  productId?: string;
}

const Product = ({ params }: { params: Params }) => {
  return (
    <div>
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
