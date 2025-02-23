### ISSUE STARTED PASSING PROPS (**PROP DRILLING**)

# Prop Drilling
Prop Drilling is a situation in React where props are passed through multiple intermediate components, even though only deeply nested components need them. This makes the code harder to manage. 

### It can be avoided Using,  

## 1) CONTEXT API

###### 
    1) What is Context Api?  

        Context API (in React) is a built-in feature that allows to share data across components without prop drilling
        It includes:
            *)createContext() : Creates a context.
            *)Provider        : Wraps components and provides the shared data.
            *)useContext()    : Accesses the shared data inside any component. 
    2) code Wrking mention in code it self 
        flow of code 
        ->createContext
            userContext.js 
        ->provider component 
            providUserContext.jsx -> app.jsx 
        ->useContext 
            login -> home etc 

##### Props.children
* props.children refers to whatever is wrapped inside a component.
    * Example 1:
        ``` jsx
        <anyComp name="Jomi"> 
            <p>This is my name</p> 
        </anyComp>
        ```
        * Here, name="Jomi" is passed as props.name.
            - <p>This is my name</p> is passed as props.children.
            So, inside anyComp, we can access:

        ```jsx
        console.log(props.name); // Output: Jomi
        console.log(props.children); // Output: <p>This is my name</p>
        ```

    * Example 2: Wrapping Another Component
        ```jsx
        <StrictMode> 
            <App /> 
        </StrictMode>
        ```
        * Here, <App /> is passed as props.children to <StrictMode>.
        This means <StrictMode> can access <App /> via props.children.
    * Key Takeaway:
        - React automatically includes any nested content inside a component as props.children.

    
## 2) State management libraries like Redux or Zustand
* This we will be learning on next topic

---
**FYI**
* This both are jst a way of managing a state (data)  which mean this comes under state Management 

- **State management** in React refers to the process of handling and updating the data (state) that controls how a component behaves and renders. It ensures that when the state changes, the UI updates accordingly.

    There are different ways to manage state in React:
    - Local State – Managed within a single component using useState or useReducer.

    - Global State – Shared across multiple components using Context API or external libraries like Redux.

    - URL State – Data stored in the URL (e.g., query parameters).

    - Server State – Data from APIs or databases, managed using tools like React Query.

