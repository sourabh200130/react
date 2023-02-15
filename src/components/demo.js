import React from "react";
import Demo2 from "./Demo2";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./missedGoal";
const Demo= (props) => {
    const x =10;
    const arr = ["a","b","c","d","e","f"];
    const handleClick = (x,y) =>{
        alert(x+y)
    }
    return  <div> 
        <Demo2 para2={props.para}/>
        Demo Component
        <h1>{props.para}</h1>
        <button onClick ={() => handleClick(10,50)}>click</button>
        <button onClick={() => handleClick(100,500)}>and more</button>
        <Demo2 para2={props.para}/>
        {x>=10 ? <MadeGoal /> : <MissedGoal />}
        <ol>
            {arr.map((alph, i) => (
                <li key={i}>{alph}</li>
            ))}
        </ol>
    </div>;

};
export default Demo;