import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./adminPages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import AdminGroup from "./adminPages/AdminGroup";
import AdminLayout from "./components/AdminLayout"; // <<< new import

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This includes Footer
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoute><AdminLayout /></AdminRoute>, // <<< use AdminLayout
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
        children: [
          // { path: "events", element: <AdminEvents /> },
          // { path: "gallery", element: <AdminGallery /> },
          { path: "upload", element: <AdminGroup /> },
          // { path: "team", element: <AdminTeam /> },
          // { path: "president", element: <AdminPresident /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
