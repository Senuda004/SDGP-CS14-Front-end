import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';

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
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
