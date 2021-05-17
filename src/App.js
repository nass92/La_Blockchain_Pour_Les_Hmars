import React from "react"
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import CoinsApi from "./Pages/LsCoins/Api";

function App({ setCrypto }) {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/list">ListCoin</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/list' component={CoinsApi} />
        </Switch>
      </div>
    </Router >

  );
}

export default App;
