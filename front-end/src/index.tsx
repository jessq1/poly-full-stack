import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { stripePromise } from './styles/stripeElement'
import { Elements } from '@stripe/react-stripe-js';

import './index.css';
import App from './pages/App';



ReactDOM.render(
  <Router>
    <React.StrictMode>
    <Elements stripe={stripePromise} >
      <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
      </Elements>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);


