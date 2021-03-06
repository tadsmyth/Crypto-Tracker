import React, { useContext, useState } from 'react';
import { WatchListContext } from '../context/watchListContext';

function AddCoin() {
    
    //Using the state to toggle the "show" class on the menu
    const [menuItems, setMenuItems] = useState(false)

    // bring in the addCoin func from the contextProvider
    const {addCoin} = useContext(WatchListContext)


    
    // Array of top coins on RobinHood as of this year
    const possibleCoins = [
        'bitcoin',
        'ethereum',
        'dogecoin',
        'cardano',
        'bitcoin-SV',
        'bitcoin-cash',
        'litecoin',
        'ethereum-classic',
        'eos',
        'okb',
        'tezos',
        'tether',
        'ripple',
    ]
    
    const handleClick = (coin) => {
        addCoin(coin)
        setMenuItems(false)
    }

    
    return (
        <div className='dropdown'> 
        {/* use onClick to toggle state */}
        <button className="btn btn-outline-light p-3 m-2 dropdown-toggle" onClick={() => setMenuItems(!menuItems)} type='button'>Popular Coins</button>
        <span className='col text-light header-name'>Name</span>
        <span className='col text-light header-price'>Current Price</span>
        <span className='col text-light header-price-change'>Price Change</span>
            <div className={menuItems ? 'dropdown-menu show' : 'dropdown-menu'}>
                {/* Map over the array to display them in the dropdown while adding a bootstrap class */}
                {possibleCoins.map((coin) => {
                    return(
                        <a onClick={() => handleClick(coin)} href='#' className='dropdown-item' >{coin}</a>
                    )
                })}
            </div>
        </div>
    );
}

export default AddCoin;





// const possibleCoins = [
//     'bitcoin',
//     'ethereum',
//     'dogecoin',
//     'cardano',
//     'bitcoin-SV',
//     'bitcoin-cash',
//     'litecoin',
//     'ethereum-classic',
//     'eos',
//     'okb',
//     'tezos',
//     'tether',
//     'ripple',
// ]