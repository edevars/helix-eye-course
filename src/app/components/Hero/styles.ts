import styled from 'styled-components';

export const StyledHero = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
  }

  & > p {
    margin-top: 3rem;
    max-width: 260px;
    text-align: center;
    font-weight: bold;
    font-size: 1.125rem;
  }
`