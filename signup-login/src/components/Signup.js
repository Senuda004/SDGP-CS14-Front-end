import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import './Login-and-sign.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      // navigate("/");
      navigate("/health-quiz");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="main-signup">
      <div className="p-10 flex items-center justify-center gap-7 bg-stone-50 rounded-[30px] custom-shadow body-2">
        {/* form */}
        <div className="lg:w-1/2 xl:w-1/2 w-full">
          <div className="p-4">
            <h2 className="mb-3 font-bold text-3xl opacity-55 text-center relative bottom-10">Nutrimate Signup</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-300 mb-2"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-300 mb-5"
                />
              </Form.Group>

              <div className="d-grid h-10 p-4 bg-amber-400 rounded-lg gap-[5px] mb-4 overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 text-white text-center">
                <Button type="Submit" className="border-none relative bottom-2 font-semibold text-center active:bg-amber-400 focus:bg-amber-400 custom-button-hover">
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
          <div className="text-center rounded-lg">
            Already have an account? <Link to="/login" className="text-amber-400">Log In</Link>
          </div>
        </div>

        {/* image */}
        <div className="w-20vh lg:block xl:block hidden">
            <img src="https://i.ibb.co/vmDdxRr/Login-Page-PNG.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Signup;