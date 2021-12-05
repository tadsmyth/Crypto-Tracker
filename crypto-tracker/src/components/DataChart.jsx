// import React, { useEffect, useRef } from 'react';
// import Chartjs from 'react-chartjs-2'



// function DataChart({data}) {
    
//     const chartRef = useRef()
    
//     useEffect(() => {
//         if (chartRef && chartRef.current) {
//             const chartInstance = new Chartjs(chartRef, {
//                 type: 'bar',
//                 data: {
//                     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//                     datasets: [{
//                         label: '# of Votes',
//                         data: [12, 19, 3, 5, 2, 3],
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 0.2)',
//                             'rgba(54, 162, 235, 0.2)',
//                             'rgba(255, 206, 86, 0.2)',
//                             'rgba(75, 192, 192, 0.2)',
//                             'rgba(153, 102, 255, 0.2)',
//                             'rgba(255, 159, 64, 0.2)'
//                         ],
//                         borderColor: [
//                             'rgba(255, 99, 132, 1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                             'rgba(153, 102, 255, 1)',
//                             'rgba(255, 159, 64, 1)'
//                         ],
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     scales: {
//                         y: {
//                             beginAtZero: true
//                         }
//                     }
//                 }
//             })
//         }
//     })
    
//     return (
//         <div>
//             <canvas ref={chartRef} id='myChart' width={200} height={200}></canvas>
//         </div>
//     );
// }

// export default DataChart;



// This will hold the data needed to make the chart using chart.js


// NOTE: some of this info was found on a YT video about Chart.js refrenced in my attached Notes


