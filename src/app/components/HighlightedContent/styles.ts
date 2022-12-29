import styled from 'styled-components';

export const StyledHighlitedContent = styled.section`
  margin: 6.4rem 3.2rem;
  
  & > .message {
    margin-top: 2rem;
  }

  & > .cards-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;
    overflow-x: auto;
    margin-top: 4.5rem;
  }

  @media screen and (min-width: 1024px) {
    margin: 9.375rem auto;
    max-width: 1024px;

    & > .cards-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      justify-content: center;
      margin-top: 4.5rem;
      width: 100%;
      overflow-x: none;
    }
  }
`