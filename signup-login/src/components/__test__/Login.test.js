import firebaseAuth from "../../firebase/auth"; // Import the firebase/auth module

// Mock firebase/auth
jest.mock("../../firebase/auth", () => ({
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  onAuthStateChanged: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
}));

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../Login";
import { UserAuthContextProvider } from "../../context/UserAuthContext"; // Import the UserAuthContextProvider

// Mocking the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("Login Component", () => {
  it("displays error message when logging in with invalid credentials", async () => {
    const { getByPlaceholderText, getByText } = render(
      <UserAuthContextProvider> {/* Provide the UserAuthContextProvider */}
        <Login />
      </UserAuthContextProvider>
    );
    
    // Fill in the email and password fields
    fireEvent.change(getByPlaceholderText("Email address"), { target: { value: "test@example.com" }});
    fireEvent.change(getByPlaceholderText("Password"), { target: { value: "password123" }});
    
    // Submit the form
    fireEvent.click(getByText("Log In"));
    
    // Wait for the error message to be displayed
    await waitFor(() => expect(getByText("User not available in database")).toBeInTheDocument());
  });
});
