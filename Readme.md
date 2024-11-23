### Redux

## Action

Action does not change the state directly instead it goes to the REDUCER to change the state .

**So REDUCER uses your previous state to manipulate the state**


When we Go to back we go for different purposes likely deposit money , withdraw or checkBalance .

In Reducer bank balnce is ==> STATE
Action likely deposit , withraw ,checkBalance ===> Actions

- Action is generally not a part of Redux . It is a convention which comes from other libraries like FLUX which programmers generally uses .

**Action does not work automatically instead we have to send these actions**
Hence action is a Event driven thing .Likely , in frontend we have eventListens and when we click on a button then it function runs .
Similarily ACTION is also like a event .

**When we dispatch a action then it automatically goes to reducer**

### ACTION contains two things 
1 . Type (deposit , withdraw , checkBalance)
2 . Payload ( 100)

In deposit and withdraw we need payload but we dont need in checkBalance . 


## SUBSCRIBE 
It is a special function in a Redux and it runs everytime there will be any change in the state .
It means whenever reducer runs then subscribe function is called .


## Three priciples of Redux 

1. Single source of Truth ( Global state)
2. Immutable Updates  ( State Read only)
3. Reducer Should be pure ( No Side effects)


## MIDDLEWARES


Before dispatching your action and send to the Reducer and if you want to perform any other operation or you want to call some other action so in that scenario we need MIDDLEWARE .

## Thunk 

It delays our action so that we can call our api

## Action Creators 
To write again and again action type likely 
> type: "incrementByAmount"

is a tedious task that's the reason we create action creators .

## JSON SERVER 

```npm install -g json-server```


