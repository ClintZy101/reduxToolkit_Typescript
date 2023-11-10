import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementAsync } from '../state/features/counter/counterSlice'
import { AppDispatch, RootState } from '../state/store'

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    
    
  return (
    <div >Counter

        <h2>{count}</h2>
        <div className=''>
            <button onClick={() => dispatch(increment())}> Increment</button>
            <button onClick={() => dispatch(incrementAsync(20))}> Increment Async</button>
            <button onClick={() => dispatch(incrementByAmount(10))}> IncrementBY10</button>
            <button onClick={() => dispatch(decrement())} > Decrement1</button>
        </div>
    </div>
  )
}
