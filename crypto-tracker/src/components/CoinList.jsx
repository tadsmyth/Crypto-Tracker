import React , { useEffect , useState }from 'react';
import coinGecko from '../api/coinGecko';


function CoinList(props) {
   // This state will store the data from the API
    const [coins, setCoins] = useState([])
    

    //This effect is the fetch call and uses my previous axios object to grab a new endpoint.
    useEffect(() => {
        const fetchData = async () => {
           const response = await coinGecko.get('/coins/markets', {
                params: {
                    vs_currency: 'usd',
                    ids: 'bitcoin,ethereum'
                }
            })

            console.log(response.data)
        }
        fetchData()
        //This empty array keeps the API from fetching again whenever anything at all changes. I think.
    }, [] )
    
   
    return (
        <div>
            
        </div>
    );
}

export default CoinList;