import React, { useState, useEffect}from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import './App.css'

function App(props) {
    return (
        <div>
            <Header />
    
            <Route exact path="/details" component={Details}/>
            <Route exact path="/src/components/" component={Home} />
        </div>
    );
}

export default App;