import React, { forwardRef } from 'react'

const PinItem = forwardRef(({handleChange,onBackSpaceHandler},ref) => {
  const handleKey = (e)=>{
    if(e.keyCode === 8){
      onBackSpaceHandler(e)
    }
    else{
      handleChange(e)
    }
  }
  return (
    <div >
              <input  
                     maxLength={1} 
                     ref={ref}
                     onKeyUp={handleKey} />
                   
    </div>
  )
});

export default PinItem