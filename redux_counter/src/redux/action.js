


export const addCount = (dispatch)=>{
    dispatch({type: "Increment",payload: 1});
}

export const reduceCount = (dispatch)=>{
    dispatch({type: "Decrement",payload: 1});

}
