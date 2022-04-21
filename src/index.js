//index.js is the first file to be executed when localhost is made run.

import React from 'react';
import ReactDOM from 'react-dom'; // importing ReactDOM object from react-dom package
import './index.css';
import App from './App'; // no need to metion the extension if it is an external package or user built js file
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); //render method carries two argument - to deploy the first (<App> component) in second place(root id available in index.html in public folder)


reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals