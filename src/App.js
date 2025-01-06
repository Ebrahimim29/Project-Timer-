import React from 'react';
import {createRoot} from 'react-dom/client';
import "./Style.css"
import Hello from "./Hello"
import Timer from './Timer';

//-----روش اول : کامپوننت های نوع کلاسی
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "سلام دوستان عزیزم"
        }
    }
    handleSetTitle = ()=>{
        this.setState({
            title:"WELCOME TO SITE"
        })
    }
    
   

    render(){
        return (
        <div className='main'>
            <Hello title={this.state.title}/>
            <Timer handleSetTitle={this.handleSetTitle}/>
        </div>
        )
    }
}
export default App;
