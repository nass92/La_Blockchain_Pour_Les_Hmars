import React from "react"
import './App.css';
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import List from "./Pages/Article/BlockArticle";
import BlockArticle from "./Pages/Article/Article";
import CoinsApi from "./Pages/LsCoins/Api";

function App({ setCrypto }) {

  return (
    <Router>
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/list' component={CoinsApi} />
      </Switch>
    </Router >

  );
}

export default App;
