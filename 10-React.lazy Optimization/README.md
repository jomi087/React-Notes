# **Code Splitting** 

* Alternative names
    - **Chunking** 
    - **Dynamic Bundling**
    - **lazy Loading**
    - **On DemanLoading**
    - **Dynamic import**

 
* Code Splitting & Performance Improvement in Vite , **Vite Automatically Handles Code Splitting** (will explain below what i mean by this)

    - Uses ES modules and Rollup to split JavaScript files. in other bundler minifier is used to do this 
    - Tree shakes unused code to reduce bundle size.

* Why Dynamic Imports (import()) Improve Performance

    - Reduces Initial Load Time – Loads only necessary code first.
    - Faster Page Rendering – The browser processes less code initially.
    - Efficient Resource Usage – Saves memory by loading code only when needed.

* When to Use Dynamic Imports?

    - Large projects with many components.
    - Multi-page apps where users don’t visit all pages.
    - Heavy components like charts, maps, or rich text editors.
    - When to Avoid Dynamic Imports?

* Small projects with minimal components.
* Frequently used components that are needed on most pages.

* Best Practice
    - Use lazy loading for large, less frequently used parts of the app.
    - Avoid unnecessary code splitting in small projects to keep things simple.

* In my way 
    - in react basicly bundlers is used  to combine all the code into a single or a few JavaScript files. This means that when a
    visits the site, the browser has to load everything at once, even if the user only needs to see a specific part of the site initially. This can slow down the loading time, especially if the application has many features.

    - Lazy loading helps to solve this problem. Instead of loading everything at once, lazy loading breaks the application into smaller chunks. Each chunk contains only the necessary code for a specific part of the application.

        - For example, imagine you have a website with a login page and a settings page. When a user first visits the site, they only see the login page. With lazy loading, the code for the settings page is not loaded until the user actually navigates to the settings page. This means the initial load is faster, and the browser only downloads the settings page code when needed.

    - So, in summary:
        - Bundling: Combines all code into one or a few files, which can slow down initial loading.
        - Lazy Loading: Loads only the necessary parts of the application initially, and additional parts are loaded as needed.

    - This approach improves performance by reducing the amount of code the browser needs to load initially.


* Use of Suspence -
    - When discussing lazy loading, you might come across the concept of "Suspense."
    In React, Suspense is a component that helps handle the loading state for components that are being lazy-loaded. It acts as a wrapper around a component that might take some time to load
    
    - Think of Suspense as a placeholder that temporarily displays something while waiting for content to load.

        - For example, when a page is set up for lazy loading, its code is only downloaded when it's actually needed. Until that content is ready, React might display a blank page or a loading screen. To prevent users from seeing a blank page, Suspense acts as a placeholder and can show a loading spinner or any other component you specify.

    - This way, users are aware that something is happening in the background, improving their experience by not leaving them staring at a blank screen.



# USE OF REACT.LAZY AND CODE SPLITTING  AS A STORY MODE

* 1. Writing Code in Modules

As developers, we write code in a modular way to make it human-readable and manageable.

These modules can be structured as components or page-wise modules in a React project.

* 2. How Bundling Works

React itself doesn’t bundle the code; instead, we use a bundler like Vite (or Webpack).

Vite takes all the separate modules and combines them into a single JavaScript file.

During this process, Vite also removes unused code (tree-shaking) to optimize the final output.

* 3. How the Browser Receives and Renders the Code

The bundled single JavaScript file is sent to the browser.

The browser downloads this file and loads it into the page source.

React then renders the application based on this JavaScript file.

* Example – Facebook App

Imagine you build a Facebook-like app in React.

- You write separate modules and components.
- The Vite bundler combines everything into a single JavaScript file.
- This file is sent to the browser, downloaded, and React renders the UI from it.

------------------------------
1. **The problem with Loading Everything at Once**

Let’s say we build Facebook in React and use Vite as a bundler.
Vite combines all pages (Login, Home, Shorts, Account, Privacy, Chat, etc.) into a single JavaScript file and sends it to the browser.
The browser downloads this entire file, even if the user only needs a small part of it.

2. Why is this a problem?

Most users don’t need every single page immediately.
If someone is just logging in, why should they download Privacy Policy, Chat, or Account pages?
This wastes time, memory, and network data.

3. The Ideal Solution

Instead of downloading everything at once, we should only load the parts the user needs at that moment.
If the user is on the Login page, only the Login page should be downloaded.
Later, when they go to Home or Shorts, those parts should load dynamically.

* This is where code splitting and lazy loading come into play,

------------------------
1. **How CoadSplitting Solves the Problem**

Code splitting and lazy loading are the solutions to avoid loading unnecessary pages upfront. Vite automatically supports code splitting, but the developer needs to use it correctly.

2. How Code Splitting Works

Normally, the Vite bundler combines everything into one big JavaScript file. However, with code splitting, we can tell Vite which modules should NOT be included in the initial bundle.

3. How to Do This?

Vite provides an import() method that allows us to mark certain modules as "not needed at first." These modules won’t be bundled into the main JavaScript file. Instead, they will be kept aside and loaded only when needed.

----------------------------------------
1. **Who Actually Splits the Code?**

As developers, we only use the import() method to specify which modules should not be bundled initially. But the actual splitting of code is handled by Vite’s code splitting feature.

2. How Vite Handles Code Splitting?

- Vite separates the specified modules from the main JavaScript file.
- These modules are stored as separate JavaScript files that are not loaded immediately.
- If you check the browser’s source files, you won’t see these files until they are needed.
- When the user navigates to a page (e.g., Profile or Privacy Policy), only then does the browser request and download the corresponding JavaScript file.

----------------------------------------------------------------------------
1. **Why Do We Need React.lazy()?**

The import() method returns a Promise, meaning it loads the module asynchronously.
However, React doesn’t understand Promises directly.
To make React handle this properly, we use React.lazy(), which allows React to treat these dynamically imported components like normal components.

* suspense
Suspense in React: Since React.lazy() loads components asynchronously, React needs a fallback UI (like a loading spinner) while waiting for the component to load. That’s why we wrap lazy-loaded components inside 
```<Suspense fallback={...}>.```
-------------------------------------------------------------------------








 
