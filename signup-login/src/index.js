import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import Home from './components/Home';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Modal from 'react-modal';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Set the app element for react-modal
Modal.setAppElement('#root');

root.render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <BrowserRouter>
        <App />
        <Home />
      </BrowserRouter>
    </UserAuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
