# Topics
* File Structure 
* Router
    - react-router-dom library
        - create Browser Router
            - create path 
            - handling undefined path
            - handling element based error 
        - router provider componet
    - useRouteEroor Hooks   (not implimented but simple it is use to log error)   
    - ways of conecting componet to perticular page & to all page (i am mentioning 2 ways )
* Diffrence between <a> and <Link>
* Client side rendering and Server side rendering
 

# file structure 
```
    my-react-app/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx     // Reusable component (Navigation Bar)
│   │   ├── Footer.jsx      // Reusable component (Footer)
│   │   ├── layout.jsx  
│   ├── pages/
│   │   ├── Home.js        // Home Page Component
│   │   ├── About.js       // About Page Component
│   │   ├── Contact.js     // Contact Page Component
│   ├── App.js             // Main App Component (Handles Routing)
│   ├── main.js            // Renders the App to the DOM
│── public/
│── package.json
│── README.md

```

# Router 

* In React, a router is used to manage navigation between different pages or views in a single-page application (SPA). The most popular routing library for React is React Router.(React-router-dom)

*  Why Use a Router in React?
React is a single-page application (SPA) framework, meaning it doesn't reload the page when navigating. Instead, routing libraries like React Router help update the UI dynamically based on the URL.

* install React Router library => ` npm i react-router-dom` 
    * used named  import createBrowserRouter which is a function in react-router-dom library 
        - it is  used to add list of object with path and  componet 
    * also imports (named) RouterProvider which is an built in componet in react-router-dom library
        - RouterProvider makes the list (created  in createBrowserRouter()) available to the app.ie  by passing props 
        - It ensures the correct component is shown based on the current URL.

## conecting componet to pages {perticular page and to all page} claasic way

### 1st way
* nothing much to explain jst a summry about were i used so,
    - componets in perticular page and all page
        - i have used footer in home and error page  , this will make a good understanding  on how we can use componet for a specific pages  
    - components in all pages 
        - for adding a component to all pages we can do the same way  like done in to Adding components in pertiular page ie jst add header component manualy in all pages  ( but that is tds )

```jsx       
    import Home from './pages/home';
    import Contact from './pages/contact';
    import About from './pages/about';
    import Error from './pages/errorpage'
    import NotFound from './pages/pageNotFound'
    import './App.css';

    import { createBrowserRouter, RouterProvider } from 'react-router-dom';

    //createBrowserRouter() //takes 1 argument which is  an array of route objects.with path (route) and element (component)
    const appRouter = createBrowserRouter([ 
    {
        path: "/",
        element: <Home/>,
        errorElement:<Error/> // this for hadling error related to perticular element
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement:<Error/>
    },
    {
        path : "/about",
        element : <About/>,
        errorElement:<Error/>
    },
    {
        path : "*",   //this for handling undefined routes
        element : <NotFound/>, 
        errorElement:<Error/>
    }
    ]);

    function App() { 
    return <RouterProvider router={appRouter} />  //RouterProvider is an built in componet in react-router-dom library
    //RouterProvider makes the appRouter available to the app.It ensures the correct component is shown based on the current URL.
    }

    export default App; 

```

### 2nd WAy (With the help of library(react-router-dom))
* FOR 2nd way we will be using extra library and also app.jsx we need to  update  so i have mentioned privous app.jsx above  (1st way)

    * **Explanation in my way**  
    * So what we will be doing is that
        Assume we want head and footer to be common for all pages so what will doing is that  
        we will be create a component name layout (cz layout is used nameing convention ) and connect with:-
        header components 
        content component  (outlet componet ) 
        footer components 

        * this will try to render and the best part is  the outlet component will be dynamic ie, outlet component (which is outlet is a feture by react-router-dom) will be changing on the basis of route 
        also we can use this for specific componet also by **Conditon rendering** [ ie render on the basis of condition ] and 
        
        * This routes are given as  children [list of object with path and elemnts ] 
            - where layout(outlet) will be the parent element with path '/'
                - Layout.js is a reusable component that helps keep common parts of the website, like the Navbar, on all pages. It uses Outlet to show the correct page based on the URL."
        * This means: 
            * This way  we can achvie components in all pages
                - The Navbar stays the same on every page.
                - **Outlet** acts as a placeholder for whatever page the user visits (Home, About, Contact, etc.).
                - It helps avoid repeating code in every page.
                    * Outlet componet -> 
                        - <Outlet /> acts as a placeholder for child routes.
                        - It is used in the parent route's component (like Layout.js).
                        -  Without <Outlet />, child pages will not appear in nested routing.
                        - It helps keep shared UI (like Navbar) on all pages while switching views.


## Diffrence between <a> tag and <Link> tag

* <a> Tag (Anchor Tag)
    - Standard HTML tag for navigation.
    - Causes a full page reload when clicked.
    - Default behavior is to request the new page from the server.

> 🚨 Problem in React Apps: Since **React is a Single Page Application** (SPA), using <a> makes the browser reload the entire app, losing state and slowing down navigation.

* <Link> (React Router) =>  

    - Comes from react-router-dom.
    - Navigates between pages without refreshing the browser.
    - Uses client-side routing, making navigation faster.

* FoR BETTER UNDERSATANDING you can try clicking the home page and contact page you can see that it is fast and smooth cz only the required component is chainging ie , home conponent or contact componet its not re-rendering header footer  but in case of "about" page i have given it 
 <a> tag (you can check Header Component) which will refresh whole page and who can visulize see it by clicking "about" tags   
    * for using Link tag (which is a component ) we have to import it from  react-router-dom library 

> **IMPORTANT**  
> **ANCHOR <a> TAG IS A SERVER SIDE ROUTING**  
>
> **LINK <Link> TAG IS A CLIENT SIDE ROUTING**

* Client-Side Routing
    - Client-side routing is a method where the browser handles navigation without asking the server for a new page. Instead, JavaScript updates the content dynamically, so the page does not reload. This makes navigation faster and smoother.

* Server-Side Routing
    - Server-side routing is a method where every time you visit a new page, the browser sends a request to the server, and the server responds with a new HTML page. This causes a full page reload, which can be slower compared to client-side routing.


**Which One to Use?**
* Use Client-Side Routing if:>
    - You're building a React SPA.
    - You want fast, smooth navigation.
    - Your app has many interactive features.
* Use Server-Side Routing if:>
    - You need better SEO (e.g., blogs, news sites).
    - Your app relies on server-rendered data.
    - You don’t use a frontend framework like React.


                
