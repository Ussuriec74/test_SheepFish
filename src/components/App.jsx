import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const AddProductForm = lazy(() => import("../pages/AddProductForm"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="register" element={<AddProductForm />} />
      </Route>
    </Routes>
  );
};