import { useRoutes, BrowserRouter } from "react-router-dom";
import {ShoppingCardProvider} from "../../context"
import React from "react";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder"; 
import MyOrders from "../MyOrders"; 
import NotFound from "../NotFound";
import SignIn from "../SignIn"; 
import Navbar from "../../Components/Navbar";
import "./App.css";

const AppRouters = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCardProvider>
    <BrowserRouter>
      <Navbar />
      <AppRouters />
    </BrowserRouter>
    </ShoppingCardProvider>
  );
};

export default App;
