import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types";
import { useRef } from 'react';
import PinItem from './PinItem';


const Pin = ({leng,onChange}) => {
    const inputRef = useRef([]);
    const [inputBox] = useState(new Array(leng).fill(1));
    const [inputBoxValue,setInputBoxValue]=useState(new Array(leng).fill(""))
    const handleChange = (e,index)=>{
      inputBoxValue[index] = e.target.value;
      setInputBoxValue(inputBoxValue);
        if(index<leng-1){
          inputRef.current[index+1].focus();
          
        }
        onChange(inputBoxValue.join(""))
    console.log(inputBoxValue)

    }
    const handleBackSpace=(e,index)=>{
       if(index>0){
        inputRef.current[index-1].focus();
        // inputBoxValue[index]=e.target.value; 
       }
      
    }
  return (
    <div style={{display:"flex", justifyContent:"center"}} >
        {inputBox.map((item,index) =>{
            return (
               <PinItem key={index} ref={(element)=>{
                     inputRef.current[index] = element}}
                      handleChange={(e)=>handleChange(e,index)} 
                     onBackSpaceHandler={(e)=>handleBackSpace(e,index)}/>
            )
        })}
    </div>
  )
}

Pin.propTypes = {
    length: PropTypes.number,
    onChange: PropTypes.func,
};



export default Pin