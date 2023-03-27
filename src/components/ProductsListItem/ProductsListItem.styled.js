import styled from 'styled-components';

export const DeleteBtn = styled.button`
  margin-left: auto;
  background-color: ${p => p.theme.colors.btnColor};
  
  &:focus, &:hover {
    background-color: ${p => p.theme.colors.accentColor};
  }
`;