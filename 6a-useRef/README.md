# useRef (in class-component  it is createRef )
* Definition
    - useRef() is a React hook that returns a mutable ref object which persists across re-renders of a functional component. This object contains a single property called .current that can hold any value.

    - The useRef() hook is primarily used for two purposes:

    - Accessing and interacting with DOM elements directly, similar to how you'd use document.getElementById in plain JavaScript.

    - Storing mutable values that don’t trigger a re-render when changed (unlike state).

    - The value stored in ref.current is local to the component, and updating it does not cause the component to re-render, making it useful for storing things like timeouts, previous state values, or any mutable container.

# useEffect
* Definition:
    - useEffect() is a React hook that allows you to perform side effects in functional components. A side effect can be any operation that interacts with the outside world, such as fetching data, manipulating the DOM, or subscribing to events.

    - It runs after the component renders and can be triggered on every render or based on specific dependencies. The hook returns a cleanup function (optional) that is executed when the component is unmounted or before the effect runs again, allowing you to clean up resources (like timers or subscriptions).
    
    ```useEffect(cb,[depencies])```