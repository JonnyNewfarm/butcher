"use client";

import { Order, Product, User } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useCallback } from "react";

import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import {
  MdAccessTimeFilled,
  MdCached,
  MdClose,
  MdDelete,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";
import ActionButton from "@/app/components/ActionButton";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ManageOrderClientProps {
  orders: Order[];
}

const ManageOrderClient = ({ orders }: ManageOrderClientProps) => {
  const router = useRouter();

  let rows: any = [];
  if (orders) {
    rows = orders.map((order) => {
      return {
        id: order.id,
        userId: order.userId,
        email: order.email,
        name: order.name,

        city: order.address?.city,
        state: order.address?.state,
        country: order.address?.country,
        postalCode: order.address?.postalCode,
        streetNumber: order.address?.streetNumber,
        total: order.totalAmount,
        deliveryStatus: order.deliveryStatus,
        products: order.products,
      };
    });
  }

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Customer name",
      width: 220,
      renderCell: (params) => {
        return <div className="font-bold">{params.row.name}</div>;
      },
    },
    {
      field: "price",
      headerName: "Price(USD)",
      width: 100,
      renderCell: (params) => {
        return <div className="font-bold">{params.row.total}</div>;
      },
    },

    {
      field: "country",
      headerName: "Country",
      width: 70,
      renderCell: (params) => {
        return <div className="font-bold">{params.row.country}</div>;
      },
    },

    {
      field: "state",
      headerName: "State",
      width: 70,
      renderCell: (params) => {
        return <div className="font-bold">{params.row.state}</div>;
      },
    },

    {
      field: "city",
      headerName: "City",
      width: 100,
      renderCell: (params) => {
        return <div className="font-bold">{params.row.city}</div>;
      },
    },

    {
      field: "postalCode",
      headerName: "Postal code",
      width: 110,
      renderCell: (params) => {
        return <div className="font-bold">{params.row.postalCode}</div>;
      },
    },

    {
      field: "streetNumber",
      headerName: "Street number",
      width: 240,
      renderCell: (params) => {
        return <div className="font-bold">{params.row.streetNumber}</div>;
      },
    },
    {
      field: "deliveryStatus",
      headerName: "Delivery status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="font-semibold text-green-700">
            {params.row.deliveryStatus === "sent" ? (
              <p>Package sent</p>
            ) : (
              <p>Pending..</p>
            )}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "View more",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full ">
            <ActionButton
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`/order/${params.row.id}`);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div>
        <div className="mb-4 mt-8">
          <Heading title="Your orders" center />
        </div>
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { page: 0, pageSize: 9 } },
            }}
            pageSizeOptions={[9, 20]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{ border: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageOrderClient;
