import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

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

  console.log(useEffect);

  const { email, password } = formData;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.currentTarget?.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
