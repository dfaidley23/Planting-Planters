import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div className="background">
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
