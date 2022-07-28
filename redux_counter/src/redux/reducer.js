const initialState = {
    count:0
}

export const reducer = (state=initialState,action)=>{
   switch(action.type){
    case "Increment":
       return {...state, count: state.count+action.payload}
    case "Decrement":
        return {...state, count: state.count-action.payload}
    default:
        return state;
   }
}