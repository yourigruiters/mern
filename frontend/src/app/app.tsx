import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/Home.page';
import DashboardPage from './pages/dashboard/Dashboard.page';
import LoginPage from './pages/login/Login.page';
import RegisterPage from './pages/register/Register.page';
import Header from './components/Header';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/old-homepage" element={<HomePage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
