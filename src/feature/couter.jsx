import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
export default function Counter() {
    const count=useSelector(state=>state.counter.value);
    const action=useDispatch();
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>action((increment()))}>Increase</button>
        <button onClick={()=>action((decrement()))}>Decrease</button>
        <button onClick={()=>action((incrementByAmount(5)))}>Increase by 5</button>
        <button onClick={()=>action((reset()))}>Reset</button>
    </div>
  )
}
