import { Box } from "components/Box";
import { AddProductForm } from "components/AddProductForm/AddProductForm";

const AddProductPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="azure"
    >
      <h1>Please fill in the following fields.</h1>
      <AddProductForm />
    </Box>
  );
};

export default AddProductPage;