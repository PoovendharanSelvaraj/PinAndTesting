
import { useState } from 'react';
import './App.css';
import Pin from './components/Pin';

function App() {
  const [otp,setOtp] = useState("");
 

  return (
    <div className="App">
       <Pin leng={5} onChange={(value)=>{setOtp(value)}} />
       <h4>The otp is {otp}</h4>
    </div>
  );
}

export default App;
