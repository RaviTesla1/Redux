import { createStore } from "redux";

// store

const store = createStore (reducer);

 /*
  Reducer is a function and It takes two parameters STATE AND ACTION .
  Reducer always returns a State . 
  */

//   By default we call these parametes state and action but we can call it anything we want it 
  function reducer(state={amount:1} , action ){
    // Here we are mutating the state and we are returning the 2
    if(action.type = 'increment')
    return state.amount+1;
  }

//   To check GLOBAL STATE there is a function is a getState()

console.log(store.getState())


// ACTION

{type:'increment'}