import React from "react";
import Demo2 from "./Demo2";

const Demo= (props) => {
    return <div> 
        <Demo2 para2={props.para}/>
        Demo Component
        <h1>{props.para}</h1>

    </div>;

};
export default Demo;