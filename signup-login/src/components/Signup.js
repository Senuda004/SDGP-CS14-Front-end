import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

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
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="p-10 flex items-center justify-center gap-5 bg-stone-50 rounded-[30px] custom-shadow">
      {/* form */}
      <div className="w-1/2">
        <div className="p-4">
          <h2 className="mb-3 font-bold text-3xl opacity-70 text-center relative bottom-10">Nutrimate Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid h-10 p-4 bg-amber-400 rounded-lg justify-center items-center gap-[5px] mb-4 overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <Button type="Submit" className="border-none relative bottom-4 font-white font-semibold active:bg-amber-400 focus:bg-amber-400 custom-button-hover">
                Sign up
              </Button>
            </div>
          </Form>
        </div>
        <div className="text-center rounded-lg">
          Already have an account? <Link to="/" className="text-amber-400">Log In</Link>
        </div>
      </div>

      {/* image */}
      <div className="w-1/2">
          <img src="https://i.ibb.co/vmDdxRr/Login-Page-PNG.png" alt="" />
      </div>

    </div>
    </>
  );
};

export default Signup;