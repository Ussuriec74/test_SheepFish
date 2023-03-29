import styled from 'styled-components';

export const Container = styled.div`
  width: ${p => p.theme.space[12]}px;
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[6]}px;

  /* @media (min-width: ${p => p.theme.space[11]}px) {
    width: ${p => p.theme.space[11]}px;
    padding: 0 ${p => p.theme.space[6]}px;
  }
  @media (min-width: ${p => p.theme.space[12]}px) {
    width: ${p => p.theme.space[12]}px;
    padding: 0 ${p => p.theme.space[7]}px;;
  } */
`;