"use server";
import getOrderById from "@/actions/getOrderById";
import Container from "@/app/components/Container";
import NullData from "@/app/components/nullData";
import OrderDetails from "@/app/order/OrderDetails";

interface Params {
  orderId?: string;
}

const Order = async ({ params }: { params: Params }) => {
  const order = await getOrderById(params);
  if (!order) return <NullData title="No order"></NullData>;
  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Order;
