import React from 'react'
import { useDispatch } from 'react-redux';
import { addCount, reduceCount } from '../redux/action';
// import { store } from '../redux/store';

const CounterButton = () => {
    const dispatch = useDispatch();
    const handleAdd=()=>{
         addCount(dispatch)
    }
    const handleSubs=()=>{
        reduceCount(dispatch)
    }
  return (
    <div>
        <button onClick={handleAdd} >Increment</button>
        <button onClick={handleSubs} >Decrement</button>
    </div>
  )
}

export default CounterButton