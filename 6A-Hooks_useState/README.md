 # Understading the concept of hooks 

* in this folder of code i have only learned about `useState()` hook further will learn more about and i will mention in there

```jsx
const App = () => {  
    let count = 0;  
    const increment = () => {  
        count++;  
        setcount(count);  
    };  
    const decrement = () => {  
        count--;  
        setcount(count);  
    };  
    return (  
        `<div className = "container">`  
        `<button onClick = {decrement} >-</button>`
        `<p>{count}</p>`  
        `<button onClick = {increment} >+</button>`  
        `</div>`  
    );  
} 
createRoot(document.getElementById('root')).render(<App />);
```


1) SO this is a basic functional component were jsx return a ui of,  
   **[+] 0 [-]**   
   Each button has given an event listner to increment and decrement 
   so when this program runs the ui will display it like => line number 27 and thats perfectly ok   
   but when you ttry to increment or decrement  the count in ui  dosnt increse or decrease  but how ever the count variable is getting increment and decremeted (you can check by loging it in the console)   
   The reason for this is simple: while we've written the logic to update the count variable when the button is clicked, we haven’t written the logic to update the UI. This can be done with DOM manipulation. 

    So in this scinario we usualy do it by actual dom manupulation we know how TDS it is,   
    like assume that in e-commerce  cart you are increae the quantity of an item so in order that the price must also be getting updated   
    so for that,    
    - 1st updating a data according to the quantity 
    - Then, update the frontend (UI) by manipulating the DOM according to the updated quantity.
    - This is how we sync data layer and ui layer  (its is TDS operation)

    For that's why react help us in this scinero, were react achives syncing data layer and ui layer with out tds operation   
    which means,    
    **React can do faster Dom manipulation & efficent Dom manipulation**

    What it does is, data will be update by us but dom will be updated by react,  
    Why beacause, 
    - React is Declarative, Not Imperative ie,
        - Vanilla JavaScript (Imperative): You tell the browser how to update
        `document.getElementById().innerHTML = "new data".`
        - React (Declarative): You define what the UI should look like based on state, and React updates it automatically.ie it will re-render it

    - How does React updates it automatically. 
        - cz of the concept virtual Dom 
        - react used reconcillation & diff algorithm  

2) To define what the UI should look like, React gives us powerful functions known as hooks.
    * in that one of them is `useState` which  Manages component state
    * i used here for managing the state of a variable 
    - How to use  ?
        - 1st import {useState} from 'react';    <- This is a named import 

        - hook can only be used inside a functional component ie its scope is inside  function

        - implementation `useState(vairable name)`   
            - This return an array 
            - whoes 0th index will be indetifier for state variable 
            - and  1st index will be method for update state

    ie,  
    * `const App = ()=> { `

        * instead of giving `let count = 0 ` ,which didnt wrked in this scinareo, cz as mentioned react need will be updateting dom so we in react we jst need to maintain the state ,so we used state variable given below

        * `let [count,setcount] = useState(0)` , i jst de-structured it  , 1st is state variable 2nd is update function which update state variable 

        * There is a naming convention as per industrial way which is the function name must be the combination of  
        **"set"+"state_variable_name"**

        ```jsx
        const increment = ()=>{ 
            count++
            setcount(priCount=>priCount+1)
        }

        const decrement = ()=>{
            count--
            setcount(priCount=>priCount+1)
        }
        ```

        * as we know theat the above function will wrks on the basis of onClick events.inside that deffinition statechanger hook is beign invocked , React will automatically re-render the component and update the UI whenever the state changes.,

        **WHENEVER THE STATE GETS UPDATED,REACT RE-RENDERS THE COMPONENT.** 

        React re-renders a component whenever the state (useState, useReducer), props, or context (useContext) change, but not when values in useRef or effects in useEffect update." 
        perticular component (Here it is app component this wll rerender and update ui)

        ``` 
        return (
            <div className = "container">
            <button onClick = {decrement} >-</button>
            <p>{count}</p>
            <button onClick = {increment} >+</button>
            </div>
        )

------

# React under the Hood working & React Fiber

***React works behind the scenes using two algorithms***  
***Reconciliation Algorithm  &  Diff Algorithm***

* Reconciliation is the process of updating the webpage efficiently when something changes.

* The Diff Algorithm finds those changes by comparing the old versions of virtual Dom and new versions of virtual Dom of the webpage (Virtual DOM).

* After React version 16, the algorithm was updated and named the React Fiber Algorithm.

    - It still follows ***Reconciliation and the Diff Algorithm***, but in a much more efficient way.

    - One key improvement is ***incremental rendering***, where React rerenders changes chunk by chunk instead of updating everything at once.
    This allows React to prioritize important updates, like animations or user interactions, and handle less important tasks later. It makes the UI smoother and faster without freezing or lagging.


# Deffinition

## virtual DOM
- It is basically a copy of the actual DOM.
- More accurately, it is an object representation of the real DOM.
- For example, when we create an element in React like this:
  ```jsx
  let heading = React.createElement("h1", { props }, children);
  ```
- The heading variable is an object, and this object represents the Virtual DOM.


## Hooks
* hookes basicly is a  special function that lets you use React features (like state and lifecycle methods) in functional components.
* is simple way
    *  The word "hook" is used because it means "attach" or "connect" something.
    * In programming, a hook is a special function that lets us add/attach/connect  extra behavior at certain points. 


## Type of Hooks

| Hook          | Purpose                                                    |
|---------------|------------------------------------------------------------|
| `useState`    | Manages component state                                    |
| `useEffect`   | Handles side effects (API calls, subscriptions, etc.)      |
| `useContext`  | Accesses global state (context)                            |
| `useReducer`  | Alternative to `useState` for complex state logic          |
| `useRef`      | Creates a reference to DOM elements or values that persist without re-rendering |
| `useMemo`     | Optimizes performance by memoizing values                  |
| `useCallback` | Optimizes functions to prevent unnecessary re-renders      |


