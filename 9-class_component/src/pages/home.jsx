import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'

class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {  // this is how to create state  
            count : 0,
            count1  : 1000 , // this is how to create multiple state
            count2 : 0
        }
        console.log("1st constructor")
    }

    componentDidMount(){// will exicute after 1st render 
        console.log("2nd componentDidMount")
        this.setState({
            count1 : this.state.count1 + 1 
        })
    }

    componentDidUpdate(){     // this will exicute afte subsequant render, you can check this by looking in brwosers console
        if(this.state.count2 == 5)return 
        console.log("last componentDidUpdate",this.state.count2) 
            this.setState({
                count2 :
                 this.state.count2 + 1 
            })
           
    }

    componentWillUnmount(){   // this will trigger when you change this mount to another component [ like home to contace page  ]
        //this is used for clearing any operations or else this will still wrk in background 
        // exaplained in read me with example 

        console.log("this component has been un mounted ie changed componet ")
    }
    
    render(){
        {/* we can destructure also like this 
            const {value} = this.props  
            const {count} = this.state 
        */}
        console.log("3rd render")
        return (
            <>
                <div>
                    <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Class Componet</h1>
                <div className="card">
                    <p> IMPLIMENTATION OF CLASS COMPONENT </p>
                    <button onClick = {()=>{
                        this.setState({
                            count : this.state.count + 1 
                        })
                    }}> + </button>
                    <a className="logo react bold" > This count State variable value was 0, which changes by clicking button &nbsp; {this.state.count}</a>
                    
                    <hr /> 
                    <h4>This count1 State variable value was 1000, which changes by componentDidMount Function[auto invoked componentDidMount fn once after render componentDidMount] <br/> <a className="logo react bold" > {this.state.count1}</a>  </h4>
                    <hr /> 
                    <h4>This count1 State variable value was 0, which changes by componentDidMount Function[auto invoked componentDidUpdate fn after each subset of 1st render] <br/> <a className="logo react bold" > {this.state.count2}</a>  </h4>
                </div>
                <p className="read-the-docs">
                    This value passed from  PROPS / ARGUMENTS is <a className="logo react bold" > {this.props.value}  </a> 
                </p>
            </>
        ) 
    }
}

export default Home