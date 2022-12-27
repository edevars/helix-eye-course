import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  h1 {
    color: red;
  }

  p {
    color: blue;
  }
`;


export const Header = () => {
  return (
    <StyledHeader>
      <h1>Hola amigos</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/info">Info</Link></li>
      </ul>
    </StyledHeader>
  )
}