
import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import Pin from './components/Pin';

function App() {
  const [otp,setOtp] = useState("");
 

  return (
    <div className="App">
       <Pin leng={5} onChange={(value)=>{setOtp(value)}} />
       <h4>The otp is {otp}</h4>
       <Counter/>
    </div>
  );
}

export default App;
