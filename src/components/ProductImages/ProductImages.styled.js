import styled from 'styled-components';

export const ImagesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[4]}px;
`;

export const ImageWrapper = styled.li`
  width: calc(100% / 3 - 32px);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: ${p => p.theme.space[9]}px;
  object-fit: cover;
`;
