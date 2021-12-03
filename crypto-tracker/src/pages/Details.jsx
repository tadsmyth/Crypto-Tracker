import React from 'react';
import { useParams } from 'react-router';
import CoinData from '../components/CoinData';
import DataChart from '../components/DataChart';

function Details(props) {
    // useParam will take the param from my coin.id as a const
    const { id } = useParams()
    
    function displayData() {
        <div className='coinlist'>


        </div>
    }
    
    
    return (
        displayData()
    );
}

export default Details;