import React from 'react';

function CoinData(data) {
    
    const renderData = () => {
        <div className="bg-white mt-2 p-1 rounded border row">
        <div className="col-sm">
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">Market Cap:</span>
            <span>{data.market_cap}</span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">
              Total Supply
            </span>
            <span>{data.total_supply}</span>
          </div>
        </div>

        <div className="col-sm">
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">Volume(24H)</span>
            <span>{data.total_volume}</span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">high 24h</span>
            <span>{data.high_24h}</span>
          </div>
        </div>

        <div className="col-sm">
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">
              Circulating Supply
            </span>
            <span>{data.circulating_supply}</span>
          </div>
          <hr />
          <div className="d-flex flex-column">
            <span className="text-muted coin-data-category">low 24h</span>
            <span>{data.low_24h}</span>
          </div>
        </div>
      </div>
    }
    
    return (
        <div>
            {renderData()}
        </div>
    );
}

export default CoinData;



// this will hold the extra data like market caps and other stuff.


//This is a stretch goal and only attempt this if you have time!!!