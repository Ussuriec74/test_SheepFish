import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const FilterInput = styled.input`
  margin-top: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.space[8]}px;
`;