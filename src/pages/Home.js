import { Box } from "components/Box";
import { Hero } from "components/Hero/Hero";

const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor="azure"
      >
        <Hero />
    </Box>
  );
};

export default Home;