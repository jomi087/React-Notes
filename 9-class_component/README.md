# TOPIC
* Class component
    * passing props (passing argumerts)
    * state varible 

# Class component 
* **class component** 
    - it was an older way to create component here as we can see we have to a react.Component class 
    React is an object in that React.Component is a class inside that object. We use React.Component as a base class when creating React components 

    definition 
        JavaScript class that extends React.Component and includes a render() method, which returns JSX

* **passing Props** 
    - pass props in class componet  is done by using constructor  + a super key and then we can call it by this 
    - in parameter props will recived as object not exact value , the value will be inside the object 

* **State varible**
    we usualy create a useState hook to achive State Variable  in functional componet but **In class component there is no hooks concept**  


* Mounting 
    - constructor 
    - render ->(reconcilation algo) 
        - based on that algo react upate dom -> and shows html dummy 

    - componentDidMount (any operation (assume this.setState) )

* update
    - by setState , forceUpdate  , new Props
    - render -> render( ) will re-invoked with updated data 
        - based on reconcilation algo react upate dom -> and shows html dummy 
    - componetDidUpdate

* unMounting 
    - componentWillUnmount 





https://projects.wojtekmaj.pl/react-lifecyc
le-methods-diagram/

componentWillUnmount => this is used for clearing the jarksnad which may casue performance lose cause even if you change the componet this will be wrking on your background to avoid that we write code to clear the jarkhand like for example 
asume that componentDidUpdate fn has a setInterval of "hi" on each 1 second and this was no  handled in componetWillUnmount then this will still wrk  once you change the component that is if you change the page like from this is home page and you swith to about page  cz this page is not refreshing (cz of spa architeture ) inabout page also the interval will wrk that y y will be writting code to stop interval in componentWillUnmount 
cz thatwill only get invokey while changingcomponent

so there for to avoid this scinero we will write clearInterval in componentWillUnmount fn 


same like that in funciton component for use Effect also have same problem for that we have to include  a componentWillUnmount like   concept
which will we be  return a funtion in use-effect inside that function will be having the logic of reming the jarkhan like for example clear interval would be return inside this function 
and this function willl be auto invocked once the componenct gets changed thats it 
demo 

useEffect(()=>{
    //example setInterval logic og hi in every 1 sec
    /*  
        To stop that at component changing time we have to  return a function will stoping logic 
        ie
    */ 
    return ()=>{
        // logic for stoping any performance leaking code like

        clear interval  

    }
})


**Code Splitting**  
Code Splitting & Performance Improvement in Vite
Vite Automatically Handles Code Splitting

Uses ES modules and Rollup to split JavaScript files.
Tree shakes unused code to reduce bundle size.
Why Dynamic Imports (import()) Improve Performance

Reduces Initial Load Time – Loads only necessary code first.
Faster Page Rendering – The browser processes less code initially.
Efficient Resource Usage – Saves memory by loading code only when needed.
When to Use Dynamic Imports?

Large projects with many components.
Multi-page apps where users don’t visit all pages.
Heavy components like charts, maps, or rich text editors.
When to Avoid Dynamic Imports?

Small projects with minimal components.
Frequently used components that are needed on most pages.
Best Practice

Use lazy loading for large, less frequently used parts of the app.
Avoid unnecessary code splitting in small projects to keep things simple.
 