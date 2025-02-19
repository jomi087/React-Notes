SO ,
    In this i learned about how to build react , we use to impliment react through cdn but how ever there is a faster way to implement React with installing it throug npm (!!! its not, node package manager ) package manager This will give the basic feture of React but
    
    Befor we have to install a build tool  which  gives React extra powers like fast_loding , local server building  , compressing , HMR , tree Shacking  etc 
    in basic it is modern JavaScript build tools (bundlers) used to speed up and optimize web development.
    there are several bundlers like 
    1)Webpack – Best for large-scale apps.
    2)Parcel – Great for quick, zero-config bundling.
    3)Vite – Ideal for modern frameworks like React/Vue.
    ETC..........

#    I learned about parcel i have been used "parcel" ower here 

    1)install :- [npm install --save-dev parcel]
               [npm install -g parcel-bundler]    
            -g and -d  =>  -d means developer -g means global   
                if installing with  "d" then  while running we have to add  npx else not

    2)Run :- 
        Run a development server:  
            [npx parcel index.html] this for -d
            [parcel.index.html]     this for -g
        
        Build for production :
            [npx parcel build index.html] for -d
            [parcel build index.html]     for -g

    3)install React & ReactDom
        npm i react
        npm i react-dom/client 

    and i also learned "vite" which i have not implimented but learned

##  PARCEL vs VITE  
    FEATURE 	   PARCEL	            VITE
    Zero Config	    ✅ Yes	            ✅ Yes
    Build Speed	    ⚡ Fast	            🚀 Super Fast
    HMR	            ✅ Yes	            ✅ Yes (Much Faster)
    ESM Support	    ❌ No	            ✅ Yes
    Used for	   General projects	    Modern frameworks (React, Vue)

#   Conclusion
    Vite is best for modern frontend frameworks (React, Vue, Svelte).
    Parcel is a general-purpose bundler that works with any JavaScript project.
    Vite is much faster during development because it skips bundling and uses ES modules.


