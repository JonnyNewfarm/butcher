import React from "react";
import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Butcher admin",
  description: "Butcher admin dashboard",
};
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
