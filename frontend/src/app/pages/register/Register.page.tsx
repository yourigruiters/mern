import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const RegisterContainer = styled.div``;

type FormData = {
  name: string;
  email: string;
  password: string;
  password2: string;
};

interface Props {}

const RegisterPage: React.FC<Props> = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  console.log(useEffect);

  const { name, email, password, password2 } = formData;

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
    <RegisterContainer>
      <section>
        <h1>Register</h1>
        <p>Please create an account</p>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
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
          <input
            type="password"
            value={password2}
            name="password2"
            placeholder="Re-enter your password"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </section>
    </RegisterContainer>
  );
};

export default RegisterPage;
