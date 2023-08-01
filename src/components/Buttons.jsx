import React from 'react'
import { useDispatch } from 'react-redux'
import { setButton } from '../features/ButtonOperation'

const Buttons = () => {

  const dispatch = useDispatch()
  
  return (
    <div className='flex gap-4 justify-center mt-10'>
    <button className=' border-2 w-10 h-10  rounded-full border-black ' onClick={() => dispatch(setButton('+'))}> + </button>
    <button className=' border-2 w-10 h-10  rounded-full border-black ' onClick={() =>  dispatch(setButton('-'))}> - </button>
    <button className=' border-2 w-10 h-10  rounded-full border-black' onClick={() =>  dispatch(setButton('/'))}> / </button>
    <button className=' border-2 w-10 h-10  rounded-full border-black ' onClick={() =>  dispatch(setButton('*'))}> * </button>
    </div>
  )
}

export default Buttons