import { createStore } from "redux";
// ACTION name constants 

const inc = 'increment';
const dec = 'decrement';
const incByAmt = 'incrementByAmount'

// store

const store = createStore (reducer);



function increment(){
  return {type:inc};
}
function decrement(){
  return {type:dec};
}
function incrementByAmount(payload){
  return {type:incByAmt,payload:payload};
}

 /*
  Reducer is a function and It takes two parameters STATE AND ACTION .
  Reducer always returns a State . 
  */

//   By default we call these parametes state and action but we can call it anything we want it 
  function reducer(state={amount:1} , action ){
    // Here we are mutating the state and we are returning the 2 and it is not RIGHT
  /*   if(action.type = 'increment'){
    return state.amount = state.amount+1;
  } */
  //   IMMUTABLE STATE
  if(action.type === inc){
    return {amount:state.amount + 1};
  }
  if(action.type === incByAmt){
    return {amount:state.amount + action.payload};
  }
  if(action.type === dec){
    return {amount:state.amount - 1};
  }
  return state
}


//   To check GLOBAL STATE there is a function is a getState()



// ACTION



// Subscribe 

store.dispatch(incrementByAmount(20));

console.log(store.getState())






