import React , { useContext, useEffect , useState }from 'react';
import coinGecko from '../api/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from './Coin';
import AddCoin from './AddCoin';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function CoinList(props) {
   // This state will store the data from the API
    const [coins, setCoins] = useState([])
    // This will bring in the context from the watchList state
    const {watchList} = useContext(WatchListContext)
    // create a loading state
    const [loading, setLoading] = useState(false)

    // console.log(watchList)
    

    //This effect is the fetch call and uses my previous axios object to grab a new endpoint.
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
           const response =  await coinGecko.get('/coins/markets/', {
                params: {
                    vs_currency: 'usd',
                    //the .join is taking the data from my watchList and joining them with a , to fit the param requierments.
                    ids: watchList.join(','),
                }
            }) 
            console.log(response.data)
           setCoins(response.data)
           setLoading(false)  
            
        }
        fetchData()
        //This empty array keeps the API from fetching again whenever anything at all changes. I think.
    }, [] )
    


    const loadCoins = () => {
        if (loading) {
            return <div>Loading Coins...</div>
        }
    }
   
    // [] Make a function to render out the data
    // [X] These coins will be Links to /detail. So import Link here and in the Coin component
    // [] Map needs a key unique to each item. What will it be???
    // [] Add a delete button later?
    
// key={???}


    return (
        <ul className="coinList list-group mt-4">
                    {coins.map(coin => <Coin key={coin.id} coin={coin}/>)}
                </ul>
    );

    
}

export default CoinList;