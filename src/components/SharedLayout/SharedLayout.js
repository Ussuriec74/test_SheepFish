import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Title, Link } from "./SharedLayout.styled";
import { Box } from "components/Box";
import { Container } from "components/Container";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Title>Products for you</Title>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/addproduct">Add product</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  )
}


