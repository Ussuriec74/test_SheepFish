import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { getProducts } from "redux/operations";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetailsPage = lazy(() => import("../pages/ProductDetailsPage"));
const AddProductPage = lazy(() => import("../pages/AddProductPage"));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path='products/:productId' element={<ProductDetailsPage />} ></Route>
        <Route path="addproduct" element={<AddProductPage />} />
      </Route>
    </Routes>
  );
};
