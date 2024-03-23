import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UserAuthContext } from '../../context/UserAuthContext';
import Login from '../Login';

import { TextDecoder } from 'util';

jest.mock('util', () => ({
  TextDecoder: jest.fn().mockImplementation(() => ({
    decode: jest.fn().mockImplementation((value) => value.toString()),
  })),
}));

jest.mock('../../context/UserAuthContext');

describe('Login', () => {
beforeEach(() => {
    useUserAuth.mockReturnValue({ logIn: jest.fn(), googleSignIn: jest.fn() });
});

  test('renders login form', () => {
    render(
      <UserAuthContext.Provider value={{}}>
        <Router>
          <Login />
        </Router>
      </UserAuthContext.Provider>
    );

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log In');
    const googleSignInButton = screen.getByText('Sign in with Google');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(googleSignInButton).toBeInTheDocument();
  });

  test('submits the form with email and password', async () => {
    const mockLogIn = jest.fn();
    jest.mock('../contexts/UserAuthContext');
    useUserAuth.mockReturnValue({ logIn: mockLogIn, googleSignIn: jest.fn() });

    render(
        <UserAuthContext.Provider value={{}}>
            <Router>
                <Login />
            </Router>
        </UserAuthContext.Provider>
    );

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
   fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    await waitFor(() => expect(mockLogIn).toHaveBeenCalledWith('test@example.com', 'password'));
  });

  test('navigates to "/dashboard" on successful login', async () => {
    const mockLogIn = jest.fn(() => Promise.resolve());
    const history = createMemoryHistory();
    jest.mock('../contexts/UserAuthContext');
    useUserAuth.mockReturnValue({ logIn: mockLogIn, googleSignIn: jest.fn() });

    render(
        <UserAuthContext.Provider value={{}}>
            <Router history={history}>
                <Login />
            </Router>
        </UserAuthContext.Provider>
    );

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    await waitFor(() => expect(mockLogIn).toHaveBeenCalledWith('test@example.com', 'password'));
    expect(history.location.pathname).toBe('/dashboard');
  });

  test('handles Google Sign In', async () => {
    const mockGoogleSignIn = jest.fn();
    jest.mock('../contexts/UserAuthContext');
    useUserAuth.mockReturnValue({ logIn: jest.fn(), googleSignIn: mockGoogleSignIn });

    render(
        <UserAuthContext.Provider value={{}}>
            <Router>
                <Login />
            </Router>
        </UserAuthContext.Provider>
    );

    const googleSignInButton = screen.getByText('Sign in with Google');

    fireEvent.click(googleSignInButton);

    await waitFor(() => expect(mockGoogleSignIn).toHaveBeenCalled());
  });

  test('displays error message when login fails', async () =>{
    const errorMessage = 'Login failed';
    const mockLogIn = jest.fn(() => Promise.reject(new Error(errorMessage)));
    jest.mock('../contexts/UserAuthContext');
    useUserAuth.mockReturnValue({ logIn: mockLogIn, googleSignIn: jest.fn() });

    render(
        <UserAuthContext.Provider value={{}}>
            <Router>
                <Login />
            </Router>
        </UserAuthContext.Provider>
    );

    const emailInput = screen.getByPlaceholderText('Email address');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Log In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      const errorText = screen.getByText(errorMessage);
      expect(errorText).toBeInTheDocument();
    });
  });
});