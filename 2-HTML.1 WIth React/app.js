/*
    <div id="parent">
        <h2>Welcome to React</h2>
        <p>this is  Jomi</p>
        <div id="child1">
            <p>Add some text</p>
            <p>Add one more text</p>
        </div>
        <div id="child2">
            <p>Add some text</p>
        </div>
    </div>
*/


//elemnt creation// mention the plotwith dom //render it ower the plot
const parent = React.createElement('div',{id:"parent"},[
    React.createElement('h2',{},"W2R"),
    React.createElement('p',{},"I jom"),
    React.createElement('div',{id:"child1"},[
        React.createElement('p',{},"I am a"),
        React.createElement('p',{},"Human")
    ]),
    React.createElement('div',{id:"child2"},
        React.createElement('p',{},"I am a VIsonary person"),
    )
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)

