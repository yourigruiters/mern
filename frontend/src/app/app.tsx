import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ColorTheme, ThemeType } from './styles/theme';
import HomePage from './containers/pages/home';
import DashboardPage from './pages/dashboard/Dashboard.page';
import LoginPage from './pages/login/Login.page';
import RegisterPage from './pages/register/Register.page';
import Header from './components/Header';

interface Props {
  reduxTheme: ThemeType;
}

const App: React.FC<Props> = ({ reduxTheme }) => {
  return (
    <ThemeProvider theme={ColorTheme[reduxTheme]}>
      <Header />
      <Routes>
        <Route path="/old-homepage" element={<HomePage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
