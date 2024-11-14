"use client";
import { Order } from "@prisma/client";
import Heading from "../components/Heading";
import moment from "moment/moment";
import { formatPrice } from "@/utils/foramtPrice";
import Status from "../components/Status";
import { MdAccessTimeFilled, MdClose } from "react-icons/md";
import OrderItem from "./OrderItem";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails = ({ order }: OrderDetailsProps) => {
  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="Order details" />
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">Order id:</p>
        <p>{order.id}</p>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold">Total amount:</p>
        <span className="">{formatPrice(order.totalAmount!)}</span>
      </div>

      <div>
        <div className="font-semibold">Shipment status:</div>
        <div className="max-w-36">
          {order.deliveryStatus === "sent" ? (
            <p>Package sent</p>
          ) : (
            <p>Pending..</p>
          )}
        </div>
      </div>
      <div>
        <div className="font-semibold">Ordered:</div>
        <div>{moment(order.createdAt!).fromNow()}</div>
      </div>

      <div>
        <h2 className="font-semibold mt-4 ">Products ordered</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
          <div className="col-span-2 justify-self-start">Product</div>
          <div className="justify-self-center">Color</div>
          <div className="justify-self-center">Quantity</div>
          <div className="justify-self-end">size</div>
        </div>
        {order.products &&
          order.products.map((item) => {
            return <OrderItem key={item.id} item={item}></OrderItem>;
          })}
      </div>
    </div>
  );
};

export default OrderDetails;
