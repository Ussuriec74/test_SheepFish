import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  background-repeat: no-repeat;
  background-image: url(https://cdn.pixabay.com/photo/2020/07/06/01/33/forest-5375005_1280.jpg);
`;

export const HeroLink = styled(Link)`
  color: ${p => p.theme.colors.accentColor};
`;