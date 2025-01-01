import React from 'react';
import {createRoot} from 'react-dom/client';
import "./Style.css"
class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }
    render(){
        setInterval(() => {
            this.setState({
                time:new Date().toLocaleTimeString()
            })            
        }, 1000);
        return(
            <h2 className='Timer'>
                it is {this.state.time}
            </h2>
        )

    }
}

class Hello extends React.Component{
    render(){
        return(
            <h1>سلام دوست من</h1>
        )
    }
}
class App extends React.Component{
    render(){
        return (
        <div className='main'>
            <Hello/>
            <Timer/>
        </div>
        )
    }
}

//let elem=new App

// const tick=()=>{
    createRoot(document.getElementById('root')).render(<App/>);   
// }
// setInterval(()=>{
//     tick();
// },1000)



// ReactDOM.render(elem,document.getElementById("root"));


