import React from 'react';
import Header from '../components/Header';
import AddCoin from '../components/AddCoin';
import CoinList from '../components/CoinList';
import Coin from '../components/Coin';




function Home(props) {
    return (
        <div className='coinlist shadow border rounded p-1 m-1 bg-dark'>
            <AddCoin coins={Coin.name}/>
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


    //Current ToDos:
    // [X] Get API Data
    // [X] Create the context for watchlist data to be global
    // [x] Install Bootstrap / Tailwind for CSS framework
        // Went with Bootstrap
    // [X] install Axios to handle fetch request
    // [] Maybe use SASS for CSS?
    // [] Render the API data for the top 3 watchlist coins
    // [] Add a details page with more info from API
    // [] Add search button to render user input coin
    // [] Styling as you go using Bootstrap
    // [] Incorporate a local storage to keep the list of currently tracked coins on the page while navigating between pages