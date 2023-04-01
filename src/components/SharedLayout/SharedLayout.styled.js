import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.accentColor};
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Link = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.primaryDarkText};
  font-weight: 500;
  font-size: ${p => p.theme.fontSizes.l};

  &.active {
    color: white;
    background-color: ${p => p.theme.colors.accentColor};
  }
`;