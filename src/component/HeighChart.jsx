import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const HeighChart = () => {
    const options = {
        chart: {
            type: 'area',

        },
        title: {
            text: '',
            x:0
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 250,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        xAxis: {
            
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug'
            ],
        },
        yAxis: {
        
            title: {
                text: ''
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Earning',
            data: [0,100, 300, 80, 300, 100, 200, 300]
        }],
        
      };

    return(
        <>
            <div className="mb-4 bg-white p-3 p-md-3 card">
            <div className="high-chart-header d-flex mb-4 row">
               
            <div className="col-md-6 mb-3 mb-md-0">
                <h4 className="mb-0">Earnings History</h4>
            </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <ul className="nav nav-pills ">
                        <li className="nav-item"><a className="nav-link" href="##">Weekly</a></li>
                        <li className="nav-item "><a className="nav-link active" href="##">Monthly</a></li>
                        <li className="nav-item"><a className="nav-link" href="##">Yearly</a></li>
                    </ul>
                </div>
                
            </div>
            <HighchartsReact highcharts={Highcharts} options={options}  />
            </div>
           
        </>
    )
}

export default HeighChart;