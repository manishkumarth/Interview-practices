import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseCount, incByValue, increaseCount, resetCount } from './store/slice/countSlice'

function App() {
 const count=useSelector((state)=> state.CounterApp.count)
 const dispatch=useDispatch()
  console.log(count)
  return (
    <>
      <div className='flex mx-20'>
        {count}
      <button className='btn btn-primary' onClick={()=>dispatch(increaseCount())}>+</button>
      <button className='btn btn-primary' onClick={()=>dispatch(decreaseCount())}>-</button>
      <button className='btn btn-primary' onClick={()=>dispatch(resetCount())}>reset</button>
      <button className='btn btn-primary' onClick={()=>dispatch(incByValue(2))}>+2</button>
      </div>
    </>
  )
}

export default App
