import React, { useState } from 'react'
import Button from '../Button';

const Counter = ({}) => {
    const [count, setCount] = useState(0);
    const handleAdd=()=>{
        setCount(count+1)
    }
    const handleSubs =()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>Counter: {count}</h1>
        <Button onClick={handleAdd}>Increment</Button>
        <Button onClick={handleSubs} >Decrement</Button>
    </div>
  )
}

export default Counter