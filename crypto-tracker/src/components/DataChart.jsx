import React, { useRef } from 'react';
import Chartjs from 'react-chartjs-2'



function DataChart({data}) {
    
    const chartRef = useRef()
    
    
    return (
        <div>
            <canvas ref={chartRef} id='myChart' width={200} height={200}></canvas>
        </div>
    );
}

export default DataChart;



// This will hold the data needed to make the chart using chart.js


// NOTE: some of this info was found on a YT video about Chart.js refrenced in my attached Notes


