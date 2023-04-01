import { ImagesList, ImageWrapper, ProductImage } from "./ProductImages.styled";

export const ProductImages = (images) => {
  const { title } = images;
  
  return (
    <ImagesList>
      {images.images.map(image => (
        <ImageWrapper key={image}>
          <ProductImage src={image} alt={title} />
        </ImageWrapper>
      ))}
    </ImagesList>
  );
};