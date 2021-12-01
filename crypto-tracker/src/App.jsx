import React, { useState, useEffect}from 'react';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App(props) {
    return (
        <div>
            <Route exact path="/details" component={Details}/>
            <Route exact path="/src/components/" component={Home} />
        </div>
    );
}

export default App;