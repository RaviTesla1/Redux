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

