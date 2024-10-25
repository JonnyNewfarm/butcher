import getProductById from "@/actions/getProductById";
import Container from "@/app/components/Container";
import NullData from "@/app/components/nullData";
import ProductDetails from "@/app/components/products/ProductDetails";

interface IPrams {
  productId: string;
}

const Product = async ({ params }: { params: IPrams }) => {
  const product = await getProductById(params);
  if (!product)
    return <NullData title="Oops! Product with the given id does not exist" />;

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
