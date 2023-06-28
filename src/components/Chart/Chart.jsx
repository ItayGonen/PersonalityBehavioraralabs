import React from 'react';
import './Chart.css';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = (props) => {

    return <Bar 
            data={props.chartData}  
            options={{
                scales: {
                  yAxis: {
                    min: 0,
                    max: 100,
                  },
                },
            }}
            />;
}

export default Chart;