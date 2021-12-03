import React from 'react';
import { Link } from 'react-router-dom'

function Coin({coin}) {
    return (
            <Link to='/details'>
                <li className='coinlist-item list-group-item-dark list-group-item-action d-flex justify-content-between align-items-center text-light m-1'>
                <img className='coinlist-image' src={coin.image} alt="crypto-token-icon" />
                {/* Below will show the current price inline with each item */}
                <span className='text-decoration-none'>${coin.current_price}</span>
                {/* Below is for the price change in 24hr and it will be red or green */}
                {/* put the fontAwesome arrow icons here */}
                <span className='text-success m-5'>{coin.price_change_percentage_24h}
                <i className="fas fa-sort-down align-middle"></i>
                </span>

                </li>
            </Link>
    );
}

export default Coin;