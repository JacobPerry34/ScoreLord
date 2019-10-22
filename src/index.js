import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <Router>
      < Main />
    </Router>
    , document.getElementById('root'))
