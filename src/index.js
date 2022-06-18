import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './GlobalStyles';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);