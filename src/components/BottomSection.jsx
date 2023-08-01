import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setButton } from '../features/ButtonOperation';
import { resetInputs } from '../features/InputHandlerSlice';
import { hideResult } from '../features/resultSlice';


const BottomSection = () => {

 
  const result = useSelector((state) => state.result.value);
  const showResult = useSelector((state) => state.result.showResult);


  const dispatch = useDispatch()

  const hanldeReset = () => {
    dispatch(setButton('+'))
     dispatch(hideResult())
    dispatch(resetInputs())
  }


  return (
    <div className='flex justify-between mt-10'>
    <button className='p-2 border border-black rounded-lg' onClick={hanldeReset}>Reset</button>
     {showResult &&  <div className=''>
       <p>Result : <span>{result}</span></p>
    </div>}
    
    </div>
  )
}

export default BottomSection