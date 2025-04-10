# useReducer in React

* What is useReducer?
useReducer is a React Hook used for state management. It is an alternative to useState, useful when the state logic is complex or depends on previous states.

* Use.reducer is like array.reduce  
    * As we use to write the `arr.reduce(cb,intialvalue)` 
        - where cb function takes 2 main arguments - Accumilator and Cummilator
        - Cummilator  is used for doing logical operation
        - Accumilator 1st value will be in the intial value or cumilator 1st value and then it keep on updates as per logic  (learn js  reduce method ) 
        A- nd this cb function will return a single value 
    * Same as that usereducer  is written  on the diffrence it use reducer is for managing the state there for the  method will be also will  be dealing with states ie in 
    useReducer it will aslo take a cb fun and intialState (value) and in that cb function take amin 2 argumetns ie currentState and action currentstate is same as accumilator and action is used for doing logical operation
    * And this will return a newstate in a array 
    * **For better Understanding check ReduceLvl1**  
    * **For a advance lvl check ReduceLvl2**  
        - Recomended cz
            - Scalability → You can manage multiple state values inside the object. 
            - Best practice → Uses an action object ({ type: "increase" }), which follows the **standard reducer pattern**.
            - Easier to extend → You can add more properties without changing much.

        * What is the "Standard Reducer Pattern"?
            - The standard reducer pattern is a common way of writing a useReducer function in React. It follows a structured approach where:
                - State is an object instead of a single value.
                - Actions are objects with a type property (and sometimes extra data).
                - A switch statement (or if-else) is used to handle different actions.
                - The reducer function is pure (it does not modify the old state but returns a new one).
