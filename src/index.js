import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPin from './components/navbar'

ReactDOM.render(
  <React.StrictMode>
    <NavbarPin/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
