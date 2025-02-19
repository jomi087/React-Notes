# Two Approaches: How a Web App Fetches Data from the Backend and Displays It on the Frontend

* There are two common ways to fetch and display data in a web application.

  * **1st Approach: Simple Fetch and Render** ; ( This is the basic method that I have used in my 1st project:)
      - Load the website
      - Fetch data from the backend
      - Render the fetched data in the UI

  * Issue:
      - There is a delay while fetching the data. The page waits until the data is received before rendering.
      - This feels like an old TV starting up—there’s a blank screen for a few moments, which can be frustrating or boring for users.


* **2nd Approach: Optimized Loading** (Better UX)

  * To make the experience smoother, we introduce a loading state or dummy content while fetching data:

      - Load the website
      - Render placeholder content (dummy data, loading spinner, skeleton UI, etc.)
      - at the same time Fetch actual data from the backend
      - Re-render the UI with the real data

  * Benefit:
      - The loading time feels shorter because users see something immediately.
      - Even though the data still takes time to load, we create an illusion of speed by showing temporary content.


# Optimized Loading

* React use the second approach because it improves user experience and makes the application feel more responsive.
 - This can be achive through **useEffect Hooks**

# useEffect Hooks 
    its is used when ever want to do somthing after rendering a component

## Code with Expanation

```jsx
import {useEffect,useState} from 'react'
import './App.css'

function App() {
```
**Syntax => useEffect( effect : React.EffectCallback  ,  deps? : React.DependencyList) : void**
  - useEffect is a another hook or a per-defined special function which is used for doing somthing after rendering a component that y useEffect is used (for conformation check browsers console the output will be 2,1 )
  - usualy used for  fetching the data
  - 2nd arguments is not manditory but how ever the wrking behind will be different explained below 

  1) **With out dependencies** 
``` js
  useEffect(()=>{       
    console.log("one")     
  }); 
```
  * With out dependencies  is basic nature / defult nature
  * if useEffect dosnt have dependecies argument then if an external rerender happens then   useEffect()  function  will re-run(re-render)  again 
    - ie frm my code on the 
      - 1st render in browsersed console we will see 
        - "two" will get displayed ,
        - [then render , which will not displayed in console its displays in ui then ] 
        - useEffect will run &
          - "one" will get displayed  ,
      - when the component get re-renders ie in my case when the state get change which is by inputing something  
        agian  
         - "two" will get displayed ,
        - [then render , which will not displayed in console its displays in ui then ] 
        - useEffect will run &
          - "one" will get displayed  ,

      * so as you can see useEffect is getting re-runed again  
        - ie,in console we can see,  
          >logs 2,1 ->then changing the state then -> logs  2,1


    * But what if we dont want to re-run useEffect
      - like as i mention 1 have used useEffectfor fetchin the data from the backend and there no point to re-run fetch to the same data on re-rendering   
    thats were 2nd arrguments comes to help dependecies is added 

    if a state get changed we know that its component will get re-render 
    or re-run so we if dependencies is not given then useEffect will be again re-runed 

  2) **With dependencies**
``` js
  useEffect(()=>{       
    console.log("one")   
  },[]);
``` 
  * **Scinario for empty array dependencies []**  

      * if useEffect has  **empty array dependecies** argument then if an external re-render happens then useEffect()  function  will not re-run(re-render)  again [why ? will tell you below]
      ie, it will run/render on the first time after the component is renderd 
        - ie,in console we can see,  
          - 2,1 will be displayed
            - then to change the  state will withh rerender again  
            - and while re-rending this time 
          - 2 will be only displayed not 1
            -ie useEffect will not run agian  
        - There for browser will show 
          > logs 2,1 ->then changing the state then -> logs  2

      [how every adding dependecies or not is depends on the need up on you]

  * **Scinario for array dependencies having value [val1,val2]**

      * if useEffect **dependecies argument array has value inside**  then 
      if that value is getting updated then for that dependecies the useffect will b called 
      like for example
      assume 2 state created
      const [x , setx ] = useState(1)
      const [y , sety ] = useState(2)
      and a
      useEffect (log("Hi),[y])  ( ***y*** is the dependencies)

      * so 1st time **"Hi"** will print and 
      and when i try to update  2 state 
      setx(11) and sety(22) in that case for obiviously there will be 2 re-render 
      so only for the **state x** re-rendering  useEffect will work
      there for **"HI"** will ne printed
      and for **State y** it will jst update the state and useEffectwill not run/ render




``` js
console.log("two")
const [val,setval] = useState("") 

  return (
    <div className ="container">
        <h1>"Dummy loading  or Shimmer UI  "</h1>
        <input type="text" placeholder='enter somthing'  value={val}  onChange={
            (e)=> setval(e.target.value)
        } /> 
    </div>
    //As you see input we had to use onChange y 
    //  1st of all we are  setting  value as empty string , so to update from empty string to input value we have to use function to  update state which is  setval for that pupose we are using onchange 
  )
}

export default App
```