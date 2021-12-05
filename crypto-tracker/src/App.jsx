import React, { useState, useEffect}from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import './App.css'

import { WatchListContext, WatchListContextProvider } from './context/watchListContext';

function App(props) {
    return (
        <div className='container'>
            <WatchListContextProvider>
            <Header />
           
    
            <Route exact path="/coins/:coin" component={Details}/>
            <Route exact path="/" component={Home} />
            </WatchListContextProvider>
        </div>
    );
}

export default App;