import React from "react"
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthContextProvider from './context/AuthContext';
import Header from "./components/Header";

function App() {
  //const AuthContext =createContext();
  return (
  <AuthContextProvider>
    <Header />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </AuthContextProvider>
  );
};

export default App;
