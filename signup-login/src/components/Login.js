import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import './Login-and-sign.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn(navigate);
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="main-login">
      <div className="p-10 flex items-center justify-center gap-5 bg-stone-50 rounded-[30px] custom-shadow body-2">
        {/* form */}
        <div className="lg:w-1/2 xl:w-1/2 w-full">
          <div className="p-4 ">
            <h2 className="mb-3 font-bold lg:text-3xl xl:text-3xl text-2xl opacity-55 text-center relative lg:bottom-10 xl:bottom-10 bottom-5">Nutrimate Login</h2>
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

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-300 mb-5"
                />
              </Form.Group>

              <div className="relative text-right mb-5">
                <Link to="/forgot-password" className="text-amber-400">Forgot Password?</Link>
              </div>

              <div className="d-grid h-10 p-4 bg-amber-400 rounded-lg gap-[5px] mb-4 overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 text-white text-center">
                <Button type="Submit" className="border-none relative bottom-2 font-semibold text-center active:bg-amber-400 focus:bg-amber-400 custom-button-hover">
                  Log In
                </Button>
              </div>
            </Form>
            
            <div>
              <GoogleButton
                className="g-btn mb-5"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
          </div>
          <div className="text-center rounded-lg  lg:text-[15px] xl:text-[15px] text-[13px] ">
            Don't have an account? <Link to="/signup" className="text-amber-400">Sign up</Link>
          </div>
        </div>

        {/* image */}
        <div className=" lg:block xl:block hidden">
          <img src="https://i.ibb.co/vmDdxRr/Login-Page-PNG.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Login;