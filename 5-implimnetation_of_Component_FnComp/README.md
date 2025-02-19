### Code start from -> Line number 31 (if not changed)  
`[ export function FunctionComponent(){  }] ` 

    Before that read the commented notes mentioned at begining, line no 1 to 7 then after reading that 

# Learned
- Component
- rule of JSX
- function component
    - rules of fucntion component 
- composite component
- impliment js code in JSX 
    - rules while writting js in JSX like
        - keys attribute
        - JSX expectation on js



# COMPONENT 
* A component in React is a reusable, independent piece of UI. [ like a small, reusable building block of a webpage.]
## Type of componets
    1️⃣ Functional Component
    2️⃣ Class Component
    3️⃣ Presentational Component
    4️⃣ Container Component
    5️⃣ Higher-Order Component (HOC)
    6️⃣ Controlled Component
    7️⃣ Uncontrolled Component
    8️⃣ Pure Component

## Rules For JSX
- class is a reserved keyword in js so we use className in JSX
- { } Braces are used to write js code in jsx
- ( ) parenthesis is used to return multiple elements this make esbuild to understand were jsx starts and ends
- if you directly use an array in JSX, it gets converted to a string automatically,[ example line no 42 { arr } ]
-  JSX expects expressions, not statements.
    - Expressions return a value. Can be used inside {} in JSX.
    - Statements do not return a value. Cannot be directly inside { } in JSX
    - example in simple way is
        - ✔ Expressions return a value → Allowed in JSX
        - ✔ Statements do not return a value → Not allowed in JSX
        * ie, We can use map() but we cant not directly use forEach , for loop   cz this dosnt return anything sp there for to wrk these either we have to convert this to expression like assign the values  in a variable then put in jsx
- key in loop are required , this is to avoid re-rendering list of componet when 1 is added to the list 
    - React, the key helps React identify which items changed, added, or removed when rendering lists.
    - React re-renders only changed items instead of re-rendering the entire list. If key is missing, React might not update the list correctly.
    - Use a unique id if available, instead of index
     

Let me know if you need a simpler explanation! 🚀
-

1) FUNCTIONAL COMPONENT :- its jst a function which return a JSX , 
    - RUlE -> 
        - FUNCTION NAME MUST BE IN PASCAL FORMAT (ie 1st letter of each word must be capital)
        - function invocation syntax is is self closing tag (<name/>) like line no 27 -
    -  Component Composition
        - component inside component are known as Component Composition
        - PROPS
            - Props means properties they are like arguments & parameter  

2) 

