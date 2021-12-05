import React , { Context } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { WatchListContext } from '../context/watchListContext';



function Coin({coin , deleteCoin}) {
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
                  %<i><FontAwesomeIcon  onClick={(event) => {
                    event.preventDefault() 
                    deleteCoin(coin.id)
                    }}       className='text-danger m-1' icon={faMinusCircle}/></i></span>
                </li>
            </Link>
    );
}

export default Coin;


// Why is the delete not working? It's navigating to the detail page...
  // Whole coin is wrapped in a Link tag. How do I isolate the icon or prevent it from navigating?
      // Prevent default?
      // Wrap the icon in it's own span?


