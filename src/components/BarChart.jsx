import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

function BarChart({charData}) {
  return (
    <div>
    <Bar data={charData} />
</div>
  )
}

export default BarChart