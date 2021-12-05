import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faMinusCircle } from '@fortawesome/free-solid-svg-icons';


function Coin({coin}) {
    return (
            <Link to={`/coins/${coin.id}`}>
                 <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
                 <img className="coinlist-image" src={coin.image} alt="" />
                {/* Below will show the current price inline with each item */}
                <span className='text-decoration-none'>${coin.current_price}</span>

                {/* Below is for the price change in 24hr and it will be red or green */}
                
                <span className={coin.price_change_percentage_24h < 0 ? 'text-danger m-1' : 'text-success m-1'}>
                    <i>{coin.price_change_percentage_24h < 0 ? <FontAwesomeIcon className='m-1' icon={faArrowDown}/> : <FontAwesomeIcon className='m-1' icon={faArrowUp}/> } </i>
                    {coin.price_change_percentage_24h}
                  %<i><FontAwesomeIcon  onClick={deleteCoin} className='text-danger m-1' icon={faMinusCircle}/></i></span>
                </li>
            </Link>
    );
}

export default Coin;

