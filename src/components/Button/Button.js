import { buttonStyle } from "styled-system";
import { ButtonStyled } from "./Button.styled";

export const Button = ({
  children,
  onclick,
  ...attrs
}) => {
  return (
    <ButtonStyled
      {...attrs}
      onclick={onclick}
    >{children}</ButtonStyled>
  );
};