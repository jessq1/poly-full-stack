import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import History from 'history'

import './index.css';
import App from './pages/App';



ReactDOM.render(
  <Router>
    <React.StrictMode>
    <Routes>
        <Route path="/*" element={<App />}/>
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);


