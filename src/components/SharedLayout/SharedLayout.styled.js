import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${p => p.theme.space[7]}px;
  width: 100%;
  min-height: ${p => p.theme.space[7]}px;
  background-color: ${p => p.theme.colors.bgColor};
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: ${p => p.theme.colors.accentColor};
  }
`;