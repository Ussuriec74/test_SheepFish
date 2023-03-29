import { Box } from "components/Box";
import { ProductsList } from "components/ProductsList/ProductsList";
import { ProductsFilters } from "components/ProductsFilters/ProductsFilters";
import { Container } from "components/Container";

const Products = () => {
  return (
    <Container>
      <Box display="flex" gridGap={5}>
        <ProductsFilters />
        <ProductsList />
      </Box>
    </Container>
  );
};

export default Products;