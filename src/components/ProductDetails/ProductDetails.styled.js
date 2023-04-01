import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[6]}px;
  margin: ${p => p.theme.space[4]}px ${p => p.theme.space[4]}px;
  text-decoration: none;
  background-color: ${p => p.theme.colors.btnColor};
  color: ${p => p.theme.colors.accentColor};
  padding: 0 ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accentColor};
  border-radius: ${p => p.theme.radii.small};
`;

export const DetailsTitle = styled.h2`
 font-size: ${p => p.theme.fontSizes.l};
`;

export const DetailsDescription = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
`;