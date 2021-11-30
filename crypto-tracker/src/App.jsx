import React from 'react';
import CoinList from './components/CoinList';
import Search from './components/Search';
import Chart from './components/Chart';

function App(props) {
    return (
        <div>
            <Search />
            <CoinList /> 
            <Chart />
        </div>
    );
}

export default App;