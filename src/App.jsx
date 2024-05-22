import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import { Container } from './styles';

export default function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
        </Routes>
      </Container>
    </Router>
  );
}