import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import AiChatbot from './components/AiChatbot';
import Dashboard from './components/Dashboard';
import HeroComponent from './components/landing';
import NotFound from './components/NotFound';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/not-found" if the current path doesn't match any specified routes
    if (!['/dashboard', '/calorie-meter', '/ai-chatbot', '/', '/signup', '/forgot-password',"/health-quiz", "/hero"].includes(location.pathname)) {
      navigate('/not-found');
    }
  }, [location.pathname, navigate]);

  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/hero" element={<HeroComponent />} />
              {/* Full-screen Not Found page without the sidebar */}
              <Route path="/not-found" element={<NotFound />} />
            </Routes>  
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
