import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LineChart from './LineChart'
import { fetchDailyCases } from '../redux/generalSlice'


function GeneralDataLine() {
    const dispatch = useDispatch()

  
    // Graphs
    const dailyCases = useSelector(state => state.general.dailyCases)
    const [generalData] = useState({
      labels: dailyCases?.map((item) => item.reportDate),
      type: 'line',
      datasets: [{
        label: 'Confirmed Cases',
        data: dailyCases?.map((item) => item.totalConfirmed),
        backgroundColor: '#AFAFDC',
        fill: false,
      },

      {
        label: 'Confirmed Deaths',
        data: dailyCases.map((item) => item.deaths.total),
        backgroundColor: '#BAD3F2',
      }
    ]
    })

    const [data, setData] = useState(generalData)
    
    useEffect(() => {
        dispatch(fetchDailyCases())
        setData({
            labels: dailyCases?.map((item) => item.reportDate),
            type: 'line',
            datasets: [{
              label: 'Confirmed Cases',
              data: dailyCases?.map((item) => item.totalConfirmed),
              backgroundColor: '#AFAFDC',
              fill: false,
            },
            {
              label: 'Confirmed Deaths',
              data: dailyCases.map((item) => item.deaths.total),
              backgroundColor: '#BAD3F2',
            }
          ]
          })
      },[dispatch, dailyCases])


  return (
    <div>
    <div  style={{width: '800px'}} className='mx-auto mt-3'>
     <LineChart charData={data} />
     </div>
    </div>
  )
}

export default GeneralDataLine