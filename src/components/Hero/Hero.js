import { Box } from "components/Box";
import { HeroSection, HeroLink } from "./Hero.styled";
import { AiFillBank } from "react-icons/ai";

export const Hero = () => {
  return (
    <HeroSection>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <h1>Wellcome</h1>
        <HeroLink to="/products">
          <AiFillBank size="160" />
        </HeroLink>
      </Box>
    </HeroSection>
  )
}