import React from "react";

const CoinData = ( {data} ) => {
  const renderData = () => {
    if (data) {
      return (
       
        <div className="bg-white mt-0 p-4 rounded border row">
           <div className='col-sm'>
             <img src={data.image} alt="" />
           </div>
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Market Cap</span>
              <span>{data.market_cap} Coins Mined</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Total Supply
              </span>
              <span>{data.total_supply} Coins</span>
            </div>
          </div>
               
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">24hr Volume</span>
              <span>{data.total_volume} (Coins Traded in 24hrs)</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">24h High</span>
              <span>${data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Circ. Supply
              </span>
              <span>{data.circulating_supply} Coins</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">24h Low</span>
              <span>${data.low_24h}</span>
              
            </div>
          </div>
        </div>
      )
    }
  }

  return <>{renderData()}</>
}

export default CoinData;


