/* eslint-disable eqeqeq */
import React from 'react';
import {createRoot} from 'react-dom/client';
import "./Style.css"
import TimeList from './TimeList';
import { TestContext } from './testContext';

var interval;
class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            // time:new Date().toLocaleTimeString()
            // time:15
            hour:0,
            minute:0,
            second:0,
            isStart:false
        }
    }
static contextType = TestContext;
startInterval = ()=>{
    if(this.state.isStart==false){
        this.setState({
            isStart:true
        })
        interval = setInterval(() => {
            this.setState({
                // time:new Date().toLocaleTimeString()
                // time:this.state.time - 1
                second:this.state.second + 1
            })
            if (this.state.second == 59){
                this.setState({
                    second:0,
                    minute:this.state.minute + 1
                })
            } 
            if (this.state.minute == 59) {
                this.setState({
                    minute:0,
                    hour:this.state.hour + 1
                })
                
            }           
        }, 100);
    }


    }

stopInterval = ()=>{
    this.setState({
        isStart:false
    })
    clearInterval(interval);
}
resetInterval =()=>{
    this.stopInterval();
    this.setState({
        hour:0,
        minute:0,
        second:0,
        })

    }
handleSaveTime =()=>{
    // let h=this.state.hour
    // let m=this.state.minute
    // let s=this.state.second
    // let newTime = `${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`
    let newTime = document.querySelector('.Timer').innerHTML;
    // this.props.setTimeArr([...this.props.timeArr , newTime])    
    this.context.setTimeArr([...this.context.timeArr , newTime])    
}

// }
// componentDidMount(){
    // console.log("componentDidMount");
//     this.startInterval()
    
//     }
// componentDidUpdate(){
//     if (this.state.time == 0){
//     this.stopInterval()    
//     }

    // console.log(this.state.time); 

    // if (this.state.time =="12:39:25 PM"){
    //     clearInterval(interval);
    // }
    
// }
// componentWillUnmount(){

// }
render(){
    // console.log("render"); 
let h=this.state.hour
let m=this.state.minute
let s=this.state.second
        return(
            <>
            {/* <h2 className='Timer' onClick={this.handleSaveTime} style={{color:this.context}}> */}
            <h2 className='Timer' onClick={this.handleSaveTime}>
            {/* it is {this.state.time} */}
            {/* {this.state.hour + " : " + this.state.minute +" : " +this.state.second} */}
            {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
            </h2>
            <div className='button_box'>
            <button className="action_button change_button" onClick={this.props.handleSetTitle}>Change</button>
            <button className="action_button start_button" onClick={this.startInterval}>Start</button>
            <button className="action_button stop_button" onClick={this.stopInterval}>Stop</button>
            <button className="action_button reset_button" onClick={this.resetInterval}>Reset</button>
            <button className="action_button reset_button" onClick={this.props.handleSetIsLight} 
            style={{background : this.props.isLight ? "black" : "white" ,
                color : this.props.isLight ? "white" : "black"
            }}>{this.props.isLight ? "dark" : "light"}</button>
            </div>
            {/* <TimeList> */}
                {/* {this.props.timeArr} */}
                {/* {this.context.timeArr} */}
             {/* </TimeList> */}
            </>
        )

    }
}
export default Timer;
