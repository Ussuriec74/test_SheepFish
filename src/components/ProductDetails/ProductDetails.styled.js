import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${p => p.theme.space[7]}px;
  margin: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  text-decoration: none;
  background-color: ${p => p.theme.colors.btnColor};
  color: ${p => p.theme.colors.black};
  padding: 0 ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.small};
`;

export const DetailsTitle = styled.h2`
 font-size: 20px;
`;

export const DetailsDescription = styled.p`
  font-size: 12px;
`;