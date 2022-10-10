import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import clayful from "clayful/client-js";

import axios from 'axios';
import "./css/auth.css";

clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjhkZDViYmMxMTQ0ODBhMDllOTMwYmQ2ODYwNDNkOThiMDIzMDQ4MDAyMWJkYTg2NzM3YTExODNiOGMwN2Y0NzgiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjY0MDE1MTUwLCJzdG9yZSI6IkwzNlRGTUtDR0Y5RS5QRFU2UzU3RFZKU1MiLCJzdWIiOiI0SkdUNVJQU0pUUTIifQ.mJf7DsZfshCWrBIxsEqeEKKS62k0uKh6nM8kBO8SaJU'
});

clayful.install('request', require('clayful/plugins/request-axios')(axios));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
