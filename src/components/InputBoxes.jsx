import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectButton } from '../features/ButtonOperation'
import { setDefault } from '../features/InputHandlerSlice'
import { increaseOperationValue } from '../features/operationsSlice'
import { setResult, showResult } from '../features/resultSlice'

const InputBoxes = () => {


  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
 
  const button = useSelector(selectButton)
  const dispatch = useDispatch()
  const resetInput = useSelector((state) => state.setInputs.value);


   useEffect(()=> {
     setInput1("")
     setInput2("")
     dispatch(setDefault())
   }, [resetInput])

  const handleValue = () => {
    if(input1  && input2) {
      const result = eval(input1+ button + input2)
      dispatch(setResult(result))
      dispatch(increaseOperationValue())
     dispatch(showResult())
    }else(
      alert("please enter some number values in input")
    )
  }

  return (
       <div className='flex justify-between mt-10'>
        <input type='number' className='max-w-fit border-2 rounded-lg p-2 border-black' placeholder='input-1' value={input1} onChange={(e) => setInput1(e.target.value)}/>
        <button className=' border-2 w-10 h-10  rounded-full border-black' onClick={handleValue}> {button} </button>
        <input type='number' className='max-w-fit border-2 rounded-lg p-2 border-black' placeholder='input-2' value={input2} onChange={(e) => setInput2(e.target.value)}/>
      </div>
  )
}

export default InputBoxes