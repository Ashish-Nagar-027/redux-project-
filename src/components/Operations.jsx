import React from 'react'
import { useSelector } from 'react-redux';
import { selectOperations } from '../features/operationsSlice';

const Operations = () => {
  const NumOfoperations = useSelector(selectOperations);


  return (
    <div>
        {/* this is top */}
      <div className='p-3 border-2 rounded-lg w-fit mt-10  border-black'>
        <p className=''>Total operation: <span>{NumOfoperations}</span></p>
    </div>

    </div>
  )
}

export default Operations