import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./Pages/Home";
import { Toaster } from "sonner";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CollectonPage from "./Pages/CollectonPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./Pages/OrderConfirmationPage";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
import MyOrdersPage from "./Pages/MyOrdersPage";
import AdminLayout from "./components/Admin/AdminLayout";

const App = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Toaster position="top-right " />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="Profile" element={<Profile />} />
          <Route
            path="collections/:collection"
            element={<CollectonPage />}
          ></Route>
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="order-confirmation"
            element={<OrderConfirmationPage />}
          />
          <Route path="order/:id" element={<OrderDetailsPage />} />
          <Route path="my-orders" element={<MyOrdersPage />} />
        </Route>
        {/*Admin Layout*/}
        <Route path="/admin" element={<AdminLayout />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
