import React , {useEffect, useState}from 'react';
import {createRoot} from 'react-dom/client';
import "./Style.css"
import Hello from "./Hello"
import Timer from './Timer';
import TimeList from './TimeList';
import { TestContext } from './testContext';

//-----روش اول : کامپوننت های نوع کلاسی
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             title : "سلام دوستان عزیزم"
//         }
//     }
//     handleSetTitle = ()=>{
//         this.setState({
//             title:"WELCOME TO SITE"
//         })
//     }
    
   

//     render(){
//         return (
//         <div className='main'>
//             <Hello title={this.state.title}/>
//             <Timer handleSetTitle={this.handleSetTitle}/>
//         </div>
//         )
//     }
// }

//-----روش 2: کامپوننت نوع تابعی(React Hooks)
const App = ()=>{
    const [title , setTitle] = useState ("سلام دوستان عزیزم");
    const [isLight , setIsLight] = useState (false);
    const [timeArr , setTimeArr] = useState (["00 : 03 : 25" , "00 : 04 : 35"]);

    useEffect (()=>{
        console.log("useEffect");
        return()=>{
            
        }
        
    },[isLight])

    const handleSetTitle = ()=>{
        setTitle ("WELCOME TO SITE")
    }
    const handleSetIsLight = ()=>{
        setIsLight(!isLight)
    }
    return(
        // <TestContext.Provider value='white'>
        <TestContext.Provider value={{
            // timeArr:timeArr,
            // setTimeArr:setTimeArr
            timeArr,
            setTimeArr
        }}>
         <div className='main' style={{background:isLight ? "white" : "black"}}>
             <Hello title={title}/>
             {/* <Timer handleSetTitle={handleSetTitle}/> */}
             <Timer 
            //  timeArr={timeArr}
            //  setTimeArr={setTimeArr}
             isLight={isLight}
             handleSetIsLight={handleSetIsLight}/>
            <TimeList/>
         </div>
         </TestContext.Provider>
    )
}
export default App;
