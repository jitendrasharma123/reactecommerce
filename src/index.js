// index.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import CheckoutForm from '../src/components/CheckoutForm'
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    
    <Router>
      <Routes>
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="/" element={<App />} />
      </Routes>
      
    </Router>
    
  </Provider>,
  document.getElementById('root')
);
