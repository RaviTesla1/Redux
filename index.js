import { createStore } from "redux";

// store

const store = createStore (reducer);

const history = [];

function increment(){
  return {type:'increment'};
}
function decrement(){
  return {type:'decrement'};
}
function incrementByAmount(payload){
  return {type:'incrementByAmount',payload:payload};
}

 /*
  Reducer is a function and It takes two parameters STATE AND ACTION .
  Reducer always returns a State . 
  */

//   By default we call these parametes state and action but we can call it anything we want it 
  function reducer(state={amount:1} , action ){
    console.log('action---',action)
    // Here we are mutating the state and we are returning the 2 and it is not RIGHT
  /*   if(action.type = 'increment'){
    return state.amount = state.amount+1;
  } */
  //   IMMUTABLE STATE
  if(action.type === 'increment'){
    return {amount:state.amount + 1};
  }
  if(action.type === 'incrementByAmount'){
    console.log('state.amount--',state.amount)
    return {amount:state.amount + action.payload};
  }
  if(action.type === 'decrement'){
    return {amount:state.amount - 1};
  }
  return state
}


//   To check GLOBAL STATE there is a function is a getState()



// ACTION



// Subscribe 

store.dispatch(incrementByAmount(20));

console.log(store.getState())






