import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import History from 'history'
import { stripePromise } from './styles/stripeElement'
import { Elements, CardElement } from '@stripe/react-stripe-js';

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


