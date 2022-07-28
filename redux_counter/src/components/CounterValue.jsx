import React from 'react'
import { useSelector } from 'react-redux'
// import { store } from '../redux/store'

const CounterValue = () => {
    // const [count,setCount] = useState(0)
    const count = useSelector(state=>state.count)

  return (
    <div>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default CounterValue