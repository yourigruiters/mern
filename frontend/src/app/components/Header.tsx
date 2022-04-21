import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'app/redux/store';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const onLogout = () => {
    // @ts-ignore:next-line
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Link to="/">Dashboard</Link>
      {user ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
