import { useContext } from "react";
import Item from "./item"
import { TestContext } from "./testContext";

const TimeList = (props)=>{
    // console.log(props.children);
    const context = useContext(TestContext);
    return(
        <div className="main_time_list">
            {/* <item>{props.children[0]}</item>
            <br></br>
            <item>{props.children[1]}</item> */}
            {/* {props.children.map((c)=>( */}
            {context.timeArr.map((c)=>(
               <item key={Math.random()}>{c}</item> 
            ))}
        </div>
    )
}
export default TimeList;