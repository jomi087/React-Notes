# TOPIC
* Class Component – Definition, React.Component as a base class
* Props in Class Components – Passing & receiving (constructor, super(props))
* State in Class Components – this.state & this.setState, differences from hooks
* Lifecycle Methods
* Mounting: constructor(), render(), componentDidMount()
* Updating: render(), componentDidUpdate()
* Unmounting: componentWillUnmount()
* React Fiber: Render vs Commit Phase – Why React delays actual DOM updates
* componentDidMount() – Execution order, why React waits for child components
* componentDidUpdate() – When it runs, causes of re-render
* componentWillUnmount() – Cleanup (timers, listeners, API calls)
* Cleanup in Functional Components – useEffect cleanup (like componentWillUnmount())

## Class component 
* **class component** 
    - it was an older way to create component here as we can see we have a react.Component class in Home.jsx [it is same like class and object concept]
    React is an object in that "React.Component" is a class inside that object. We use "React.Component" as a base class when creating React components 

    definition 
        JavaScript class that extends React.Component and **Includes a render() method, which returns JSX**

* **passing & reciving Props** 
    -  passing props is same like functional coponent [for more clarification check App jsx]
    - reciving props in class componet is done by using constructor + letting the parent class to know about prpops.ie, by **"super-keywords super(props)"** and then we can call it by "this" Keyword 
    - in parameter props will be recived as an object not exact value , the value will be inside the object 

* **State varible Hook**
    we usualy create a useState hook to achive State Variable  in functional componet but **In class component there is no hooks concept**  
    **Instead, React provides predefined methods (lifecycle methods) to manage state and behavior**
    * which can achive hook like feature but Requires more code compared to hooks.
        * like instead of **useState  [state and setState]** Here it is  **[this.state and this.setState]**
        > in my code i have create state (multiple state)

    * Point to be remembered
        - React class components use different mechanisms for state and lifecycle management compared to hooks. While they achieve similar results,but  they are not exactly the same   
            * Main differences:  
                - State updates are automatic in hooks, while class components require manual merging.  
                - useEffect combines lifecycle behaviors, whereas class components use separate lifecycle methods.  
                - No this issues in hooks, unlike class components.

        - In another  way 
            - Hooks are not just a replacement for lifecycle methods—they make React components simpler and more predictable. 


## Life Cyle of a class Component
#### Reference =>  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
#### Explanation: Lifecycle of a Class Component
* React has three main lifecycle phases:

    - Mounting Phase (When a component is created and inserted into the DOM)
    - Updating Phase (When a component re-renders due to changes)
    - Unmounting Phase (When a component is removed from the DOM)
    * Additionally, Render Phase & Commit Phase are part of React Fiber architecture but are not main lifecycle phases.

1. **Mounting Phase** When a component is created and added to the DOM
    * Render Phase
        - **constructor()** - Initializes the component.
        - **render**() - React runs the reconciliation algorithm (checks for changes and updates the Virtual DOM).
    * Commit Phase
        - **Updating the Actual DOM** - React updates the real DOM only once after all child components finish rendering.

            * Why does React wait before updating the actual DOM?
                - Assume a parent component has two child components with componentDidMount().
                * The lifecycle follows this order:
                    - Parent constructor → Parent render
                    - Child1 constructor → Child1 render
                    - Child2 constructor → Child2 render
                    - React commits all changes at once
                    - Child1 componentDidMount() executes
                    - Child2 componentDidMount() executes
                    - Parent componentDidMount() executes
                This ensures React updates the actual DOM only once instead of multiple times.
        - **componentDidMount()** - Runs once after the first render. Used for:
            - Fetching data from an API.
            - Setting up subscriptions or event listeners.
            - Performing actions after the component is fully loaded.
2. **Updating Phase** When the component re-renders
    * Occurs when:
        - State changes (this.setState).
        - Props change (new data from the parent).
        - forceUpdate() is called.
    * Render Phase
        - **Re-render** - React updates the Virtual DOM.
    * Commit Phase
        - **Updating the Actual DOM** - React commits changes.
        - **componentDidUpdate()** - Runs after the component update Used for:
            - Fetching new data when props change.
            - Running code after state updates.
3. **Unmounting Phase** When the component is removed
    * Render Phase (Nothing happens)
    * Commit Phase
        - **componentWillUnmount()** - Runs just before the component is removed. Used for:
            - Clearing timers (setTimeout, setInterval).
            - Removing event listeners.
            - Canceling API requests.
            - Unsubscribing from WebSockets or Firebase.
    
    
Just like in class components, function components using useEffect can also face issues if we don’t clean up resources properly.
To handle this, we include a cleanup function inside useEffect. This cleanup function acts like componentWillUnmount in class components.  
* The cleanup function is returned inside useEffect.  
* Inside this function, we write logic to clear unnecessary processes (e.g., stopping intervals, removing event listeners, etc.).  
* React automatically calls this cleanup function when the component unmounts  

Example of memory leak prevention in function components:
```jsx
useEffect(() => {
    const interval = setInterval(() => {
        console.log("Running...");
    }, 1000);

    /*  
        To stop that at component changing time we have to  return a function will stoping logic 
        ie
    */ 

    return () => {
        clearInterval(interval); // Cleanup to prevent memory leak
    };
}, []);
```

* Why?
If you don’t clean up resources in componentWillUnmount, the function will keep running in the background even after the component is removed.


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
 



# Note 
* There are many more steps in constructor(), render(), componentDidMount(), and componentDidUpdate().
* You can check them in my reference link. Just go to the previous version to understand them better.
    * For example, you can see static getDerivedStateFromProps().
        - I don’t fully know its features, but I have used it in an error boundary situation.