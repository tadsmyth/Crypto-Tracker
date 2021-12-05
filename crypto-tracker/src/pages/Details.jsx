import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CoinData from '../components/CoinData';
import DataChart from '../components/DataChart';
import coinGecko from '../api/coinGecko';

function Details(props) {
    // useParam will take the param from my coin.id as a const
    const { coin } = useParams()
    const [coinInfo, setCoinInfo] = useState([])
    // set a fethcing state to render in case the data didnt load fast enough to let user knwo
    const [isFetching, setIsFetching] = useState(false)
    
    
    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true)
           const responseDay =  await coinGecko.get(`/coins/${coin}/market_chart`, {
                params: {
                    vs_currency: 'usd',
                    days: '1',
                    
                }
            }) 
            const responseWeek =  await coinGecko.get(`/coins/${coin}/market_chart`, {
                params: {
                    vs_currency: 'usd',
                    days: '7',
                    
                }
            }) 
            const responseYear =  await coinGecko.get(`/coins/${coin}/market_chart`, {
                params: {
                    vs_currency: 'usd',
                    days: '365',
                    
                }
            }) 
            const responseDetail =  await coinGecko.get(`/coins/markets/`, {
                params: {
                    vs_currency: 'usd',
                    ids: coin,
                    
                }
            }) 
            console.log(responseYear)
            setCoinInfo({
                day: responseDay.data.prices,
                week: responseWeek.data.prices,
                year: responseYear.data.prices,
                detail: responseDetail.data[0],
            })
            setIsFetching(false)
            
            
        }
        fetchData()
        console.log(coinInfo.detail)
        //This empty array keeps the API from fetching again whenever anything at all changes. I think.
    }, [] )
    
    
    const displayData = () => {
       if (isFetching) {
           return <div>Looking for data...</div>
       }
        return (
       <div className='coinlist'>
            <DataChart data={coinInfo}/>
            <CoinData data={coinInfo.detail}/>

        </div>
       )
    }
    
    
    return (
        displayData()
    );
}

export default Details;


// One call for 24hr data isn't bad but these apps usually have more than that to provide context. Maybe get data for 3 months and then a year?
// 3 months is an uneven number so just look for 7 days of data and then a year