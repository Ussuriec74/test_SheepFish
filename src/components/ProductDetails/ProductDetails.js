import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "redux/selectors";
import { BiArrowBack } from "react-icons/bi";
import { useLocation, useParams } from "react-router-dom";

import { Box } from "components/Box";
import { ProductImages } from "components/ProductImages/ProductImages";
import { GoBackBtn, DetailsTitle, DetailsDescription } from "./ProductDetails.styled";




export const ProductDetails = () => {
  const items = useSelector(selectProducts);
  const { productId } = useParams();
  const location = useLocation();

  const backLink = location.state?.from ?? "/";
  const product = items.find(item => item.id === Number(productId));
  const { title, description, images } = product;
  
  return (
    <Box>
      <GoBackBtn to={backLink} >
        <BiArrowBack />Go back
      </GoBackBtn>
      <DetailsTitle >{title}</DetailsTitle>
      <DetailsDescription>{description}</DetailsDescription>
      <ProductImages images={images} id={productId} title={title} />
    </Box>
  )
}