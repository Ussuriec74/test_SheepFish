import styled from "styled-components";

export const ButtonStyled = styled.button`
  cursor: pointer;
  height: ${p => p.theme.space[6]};
  min-width: ${p => p.theme.space[13]};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[5]}px;
  border: none;
  border-radius: ${p => p.theme.radii.big};
  color: ${p => p.theme.colors.primaryDarkText};
  background-color: ${p => p.theme.colors.btnColor};

  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.s};
  
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: calc(26/16);
  text-align: center;
  font-family: ${p => p.theme.fonts.body};

  &:hover, &:focus, &:active {
    background-color: ${p => p.theme.colors.btnHoverColor};
  }
`;