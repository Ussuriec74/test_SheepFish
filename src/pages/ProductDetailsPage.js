import { Box } from "components/Box";
import { Container } from "components/Container";
import { ProductDetails } from "components/ProductDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <Container>
      <Box p={6} backgroundColor="azure">
        <ProductDetails />
      </Box>
    </Container>
  );
};

export default ProductDetailsPage;