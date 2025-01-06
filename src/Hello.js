import React from 'react';
import {createRoot} from 'react-dom/client';
import "./Style.css"


class Hello extends React.Component{
        
    render(){
        console.log(this.props);
        
        return(
            <h1>{this.props.title}</h1>
        )
    }
}
export default Hello;
