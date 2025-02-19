impor;
const parent = React.createElement('div', {
    id: "parent"
}, [
    React.createElement('h2', {}, "W2R"),
    React.createElement('p', {}, "I jom"),
    React.createElement('div', {
        id: "child1"
    }, [
        React.createElement('p', {}, "I am a"),
        React.createElement('p', {}, "Human")
    ]),
    React.createElement('div', {
        id: "child2"
    }, React.createElement('p', {}, "I am a VIsonary person"))
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
