import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';
import AiChatbot from './components/AiChatbot';
import Dashboard from './components/Dashboard';
import HealthQuiz from './components/HealthQuiz';
import HeroComponent from './components/landing';

function App() {
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
            </Routes>  
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
