import React from 'react'
import BarChart from './BarChart'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries, fetchNation } from '../redux/generalSlice'


function CountryBar() {
    const nationItem = useSelector(state => state.general.nationItem)
    const nation = useSelector(state => state.general.nation)

    const dispatch = useDispatch()

    console.log(nationItem)
  // Graphs
  const [countryData, setCountryData] = useState({
    labels: ['Infected','Active', 'Death'],
    datasets: [{
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
    ],
    data: [ nationItem[0].confirmed, nationItem[0]?.active, nationItem[0]?.deaths]
  }]
  })  

  useEffect(() => {
    setCountryData(
      {
        labels: ['Infected','Active', 'Death'],
        datasets: [{
          label: 'DATA',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
          ],       
          data: [ nationItem[0].confirmed, nationItem[0]?.active, nationItem[0]?.deaths]
        }]
      }
    )
  }, [nationItem])

  return (
    <div>
    <div  style={{width: '800px'}} className='mx-auto mt-3'>
     <BarChart charData={countryData} />
     </div>
    </div>
  )
}

export default CountryBar