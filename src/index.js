import React, { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './App.css';
import App from './App';

const conatiner = document.getElementById("root");

const root = ReactDOMClient.createRoot(conatiner);

root.render(<App />);

