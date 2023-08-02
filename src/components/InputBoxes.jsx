import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectButton } from '../features/ButtonOperation'
import { setDefault, setEmptyInputs } from '../features/InputHandlerSlice'
import { selectOperations } from '../features/operationsSlice'
import { setResult } from '../features/resultSlice'

const InputBoxes = () => {


  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
 
  const button = useSelector(selectButton)
  const dispatch = useDispatch()
  const resetInput = useSelector((state) => state.setInputs.value);

  const showResult = useSelector((state) => state.result.showResult);
    
  const NumOfoperations = useSelector(selectOperations);

   useEffect(()=> {
     setInput1("")
     setInput2("")
     dispatch(setDefault())
   }, [resetInput])

  
   useEffect(() => {
    if(input1 && input2 ) {
      dispatch(setEmptyInputs(true))
    } else(
      dispatch(setEmptyInputs(false))
    )
   }, [input1,input2])

  useEffect(() => {
     if(showResult){
      const result = eval(input1 + button + input2)
      dispatch(setResult(result))
      // dispatch(increaseOperationValue())
     }
  } , [showResult,button,NumOfoperations])


  return (
       <div className='flex justify-between mt-10'>
        <input type='number' className='max-w-fit border-2 rounded-lg p-2 border-black' placeholder='input-1' value={input1} onChange={(e) => setInput1(e.target.value)}/>
        <button className=' border-2 w-10 h-10  rounded-full border-black' > {button} </button>
        <input type='number' className='max-w-fit border-2 rounded-lg p-2 border-black' placeholder='input-2' value={input2} onChange={(e) => setInput2(e.target.value)}/>
      </div>
  )
}

export default InputBoxes