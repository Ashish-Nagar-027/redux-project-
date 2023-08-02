import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setButton } from '../features/ButtonOperation'
import { increaseOperationValue } from '../features/operationsSlice'
import {  showResult } from '../features/resultSlice'

const Buttons = () => {
  const emptyInputs = useSelector((state) => state.setInputs.emptyInputs);

  const dispatch = useDispatch()
  
  const handleValue = (button) => {
   
    dispatch(setButton(button))
      if(emptyInputs){
        dispatch(showResult())
        dispatch(increaseOperationValue())
      }
  }
  
  return (
    <div className='flex gap-4 justify-center mt-10'>
    <button className=' border-2 w-10 h-10  rounded-full border-black ' onClick={() =>handleValue('+') }> + </button>
    <button className=' border-2 w-10 h-10  rounded-full border-black ' onClick={() => handleValue('-') }> - </button>
    <button className=' border-2 w-10 h-10  rounded-full border-black' onClick={() => handleValue('/') }> / </button>
    <button className=' border-2 w-10 h-10  rounded-full border-black ' onClick={() => handleValue('*') }> * </button>
    </div>
  )
}

export default Buttons