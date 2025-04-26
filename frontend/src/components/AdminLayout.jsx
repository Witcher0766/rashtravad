// src/components/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const AdminLayout = () => {
  return (
    <div>
    <Navbar/>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
