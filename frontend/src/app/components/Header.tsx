import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: black;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <HeaderContainer>
      <Link to="/">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </HeaderContainer>
  );
};

export default Header;
