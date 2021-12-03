import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Coin({coin}) {
    return (
            <Link to='/details'>
                 <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
                 <img className="coinlist-image" src={coin.image} alt="" />
                {/* Below will show the current price inline with each item */}
                <span className='text-decoration-none'>${coin.current_price}</span>
                {/* Below is for the price change in 24hr and it will be red or green */}
                {/* put the fontAwesome arrow icons here */}
                <span className='text-success m-5'><FontAwesomeIcon className='m-1' icon={faArrowDown}/>{coin.price_change_percentage_24h}
                
                </span>

                </li>
            </Link>
    );
}

export default Coin;