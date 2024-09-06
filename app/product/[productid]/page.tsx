import Container from "@/app/components/Container";
import ProductDetails from "@/app/components/products/ProductDetails";
import { products } from "@/utils/products";
interface Params {
  productid?: string;
}

const Product = ({ params }: { params: Params }) => {
  const product = products.find((item) => item.id === params.productid);
  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
