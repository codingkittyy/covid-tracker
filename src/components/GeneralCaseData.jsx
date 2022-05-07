import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGlobalCases, fetchDailyCases } from '../redux/generalSlice'
import GeneralDataLine from './GeneralDataLine'

function GeneralCaseData() {
  const dispatch = useDispatch()

  const dataSet = useSelector(state => state.general.items)

  useEffect(() => {
    dispatch(fetchDailyCases())
    dispatch(fetchGlobalCases())
  },[dispatch])

  return (
    <div className='container'>
        <div className="row">
          <div className='d-flex justify-content-center align-items-center mx-auto mt-5'>
        <div className="card col-md-4 me-5">
           <div className="card-body">
               <h2 className="card-text">
               {dataSet?.confirmed?.value.toLocaleString(undefined, {maximumFractionDigits: 2})}
               </h2>
               <h3 className='card-text'>
                Total Covid Cases
               </h3>
           </div>
        </div>
        <div className="card col-md-4">
           <div className="card-body">
               <h2 className="card-text">
               {dataSet?.deaths?.value.toLocaleString(undefined, {maximumFractionDigits: 2})}
               </h2>
               <h3 className='card-text'>
                Total Deaths
               </h3>
           </div>
        </div>
        </div>
      <GeneralDataLine  />
        </div>
    </div>
  )
}

export default GeneralCaseData