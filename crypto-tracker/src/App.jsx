import React, { useState, useEffect}from 'react';
import CoinList from './components/CoinList';
import Search from './components/Search';
import Chart from './components/Chart';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App(props) {
    return (
        <div>
            <Header />
            <Route exact path="/details" />
            <Route exact path="/src/components/" component={Home} />
            <Chart />
        </div>
    );
}

export default App;