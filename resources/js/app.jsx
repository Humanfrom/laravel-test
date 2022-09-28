import App from './components/App'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

if (document.getElementById('root')) {
  ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root')
    );
}
