// Import necessary components and hooks
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="main-forgot-password flex justify-center items-center h-screen">
      <div className="p-10 flex items-center justify-center gap-5 bg-stone-50 rounded-[30px] custom-shadow body-2 w-1/2 h-[50vh]">
        <div className="w-1/2">
          <div className="p-4">
            <h2 className="mb-3 font-bold text-3xl opacity-55 text-center relative bottom-10">Forgot Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-300 mb-2"
                />
              </Form.Group>

              <div className="d-grid h-10 p-4 bg-amber-400 rounded-lg gap-[5px] mb-4 overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 text-white text-center">
                <Button type="submit" className="border-none relative bottom-2 font-semibold text-center active:bg-amber-400 focus:bg-amber-400 custom-button-hover">
                  Reset Password
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
