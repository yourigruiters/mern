import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../../redux/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/redux/store';

const LoginContainer = styled.div``;

type FormData = {
  email: string;
  password: string;
};

interface Props {}

const LoginPage: React.FC<Props> = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } =
    useSelector((state: RootState) => state.auth);

  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/');
      dispatch(reset());
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget?.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    // @ts-ignore:next-line
    dispatch(login(userData));
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <LoginContainer>
      <section>
        <h1>Login</h1>
        <p>Please login to your account</p>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </section>
    </LoginContainer>
  );
};

export default LoginPage;
