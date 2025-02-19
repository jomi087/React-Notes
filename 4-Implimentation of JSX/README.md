- POINTS TO BE NOTEDED
    - Here i have deleted some files which was create  by vite (like index.css,app.jsx,app.css) why so that at 1st time i dont want to make it complicated that y we will be lerning later about rest of the files

# JSX (JAVA SCRIPT XMLM)

* it is HTML LIKE SYNTAX 
* its not a separate language -> its a syntax extentnsion for  js 
* its has some rules like 
    - class should be named as className
    - js logic can be written  with in {}
    - attributes must be in camelCase
    - self closing tags

- ie, in simple way  
    - JSX is like an extention which help to write code easier ie , instead on writing Read.createElement()
    for every tag, which is very difficult and also not readable so to avoid that  a syntax extention was created that was "JSX" which is like an HTML thus helping us to write html like tags but in reality is not html it is jsx which is like an html + has add on fetures like intigrated js and more 
    
    - Also There is a point to be noted which is js buy itself dosnt understand jsx .
    Browser and engin were designed to understood JS[es6] not JSX 
    SO, JSX should be converted to js for that bulder came  to help in bundler there was a library "BABEL" 
    which is a transpiler (transfor + compile) it transform JSX to  js  ( even in  you vist BABEL website there is a IDE were we can type JSX and it will convert it in to js in front of u) 
        in simple words Bable convert JSX tag to React.createELement("",{},"hlo world) then after tihs the process is same as mentioned in " 1-html_with_React "
    
    How ever in vite the esbuld bundler it self transpile, so no need of babel how ever for other like in parcel ,webpack  Babel is used 

    - Also esbuild is more fater than babel why ?
    
    babel was create by js which is a single thread while esbuild is create by Go which use multithread thus making it fast

# Difference between JSX and HTML:
JSX is like html cz developers thought that creating a new syntax and learning it will be defficult so they made tool which  all developer has a knowledge in it and esiar to under stand that y they mimiced HTML but they is more than HTML there are rule and some add on feture which make easier  to distigues between them  

| Feature               | JSX                                                              | HTML                                       |
|-----------------------|----------------------------------------------------------------|--------------------------------------------|
| **Definition**        | A syntax extension for JavaScript used in React.              | A standard markup language for web pages.  |
| **Usage**            | Used inside JavaScript to define React components.             | Used for static web pages and templates.  |
| **Attributes**       | Uses camelCase for attributes (e.g., `className`, `onClick`).  | Uses lowercase attribute names (e.g., `class`, `onclick`). |
| **JavaScript Expressions** | Supports JavaScript inside `{}` (e.g., `{2 + 2}`).       | Does not support JavaScript inside `{}` directly. |
| **Self-Closing Tags** | Requires self-closing tags for elements without children (e.g., `<img />`). | Self-closing tags are optional (e.g., `<img>` is valid). |
| **DOM Manipulation**  | Converted into React elements and updated efficiently using the virtual DOM. | Directly rendered in the browser’s DOM. |



# Code Explanation line 4 - 7

`let heading = (<h1>hlo world 1</h1>) ;`
- `(<h1>hlo world 1</h1>)`
    - This line is JSX 
        > note  its might seems that this is html but actualy its not its like html cz to make human redable and understandable jsk was made like html but how ever jsx jave much more feture and rules which is mentioned on the JSX notes 
    - This line of jsx get transpiled by esbuild and converted to react element (which is React.createElement after then same process which i have mention in 1st chapter )


