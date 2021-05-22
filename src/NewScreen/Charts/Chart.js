import React from 'react';

import ChartBar from './ChartBar'
import './Charts.css'
const Chart = props => {
debugger;
    const dataPointsValue =props.dataPoints.map(dataPoint=>dataPoint.value)
    console.log(dataPointsValue)
    const totalMaxValue = Math.max(...dataPointsValue)
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoints) => (
                <ChartBar
                    value={dataPoints.value}
                    maxValue={totalMaxValue}
                    label={dataPoints.label}
                    key={dataPoints.label} />))}
        </div>
    )
}

export default Chart;
