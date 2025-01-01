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
export default Timer;
