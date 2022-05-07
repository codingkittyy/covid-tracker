import {changeCountry} from '../redux/generalSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries, fetchNation } from '../redux/generalSlice'
import CountryBar from './CountryBar'



function CountryData() {
    const dispatch = useDispatch()

    const countries = useSelector(state => state.general.countries)
    const nationItem = useSelector(state => state.general.nationItem)
    const nation = useSelector(state => state.general.nation)

    useEffect(() => {
        dispatch(fetchCountries())
      },[dispatch])
    
      useEffect(() => {
        dispatch(fetchNation(nation))
      }, [dispatch, nation])


  return (
    <div className='container mt-5'>
        <div className="row">
        <select 
            defaultValue={nation} 
            onChange={(e) => dispatch(changeCountry(e.target.value))}
        >
            {countries.countries?.map((country) => (
            <option key={country.iso2}>
                {country.name}
            </option>
            ))}
        </select>
                <span className='mt-3'>
                    <h3>{nation} </h3>
                    <p>Last Updated: {nationItem[0]?.lastUpdate}</p>
                </span>
          <div className="card col-md-4">
           <div className="card-body">
           <h2 className="card-text">
               {nationItem[0]?.confirmed.toLocaleString(undefined, {maximumFractionDigits: 2})}
               </h2>
               <h3 className="card-text">
                  Confirmed
               </h3>
           </div>
        </div>
        <div className="card col-md-4">
           <div className="card-body">
           <h2 className="card-text">
               {nationItem[0]?.active.toLocaleString(undefined, {maximumFractionDigits: 2})}
               </h2>
               <h3 className="card-text">
                  Active
               </h3>
           </div>
        </div>
        <div className="card col-md-4">
           <div className="card-body">
           <h2 className="card-text">
               {nationItem[0]?.deaths.toLocaleString(undefined, {maximumFractionDigits: 2})}
               </h2>
               <h3 className="card-text">
                  Deaths
               </h3>
           </div>
        </div>
        <div className='mb-5 mt-3'>
        <CountryBar  />
        </div>
        </div>
    </div>
  )
}

export default CountryData