import React from 'react';
import Header from '../components/Header';
import AddCoin from '../components/AddCoin';
import CoinList from '../components/CoinList'

function Home(props) {
    return (
        <div>
            <AddCoin />
            <CoinList />
        </div>
    );
}

export default Home;


// Home page will show all of the currently tracked coins and their prices.


// MVP Features:
//  [ ]Add Coin button-dropdown to select a coin
    // Would like to make this a search bar but will start with a button
//  [ ]Display the prices of each coin
//  [ ]Display the trending up or down arrow based on current trends
    //  Would like to make this a full on chart or maybe put the chart in the details page...