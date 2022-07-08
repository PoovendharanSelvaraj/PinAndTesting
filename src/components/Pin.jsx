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
       }    
       inputBoxValue[index] = e.target.value;
       setInputBoxValue(inputBoxValue)
       onChange(inputBoxValue.join(""))

    }
    const handlePaste = (e)=>{
      e.preventDefault();
      const data = e.clipboardData.getData("text")
      .split("").filter((item,index)=>index<leng);
      data.forEach((value,index) =>{
        inputBoxValue[index]=value;
        inputRef.current[index].value = value;
        if(index < leng -1){
          inputRef.current[index+1].focus();
        }
      })
    }
  return (
    <div style={{display:"flex", justifyContent:"center"}} onPaste={handlePaste} >
        {inputBox.map((item,index) =>{
            return (
               <PinItem key={index} 
                ref={(element)=>{
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