import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/home/Home';
import Sucess from './pages/sucess/Sucess';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sucess" element={<Sucess/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);