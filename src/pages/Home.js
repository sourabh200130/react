import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import "./Style.css"
import classes from "./Style.module.css";

const Name = () => {
    const [isData, setIsData]= useState("hello")
    const myStyle={
        color:"red",
        backgroundColor:"blue",
        textAlign:"center",
    };
    const handleChange=()=>{
        setIsData("World");
    }
    return(
        <div>
            <h1>{isData}</h1>
            <button onClick={handleChange}>chage</button>
            <NavigationBar />
            <h1 style={{color: "white", backgroundColor: "black"}}>Home page Component</h1>
            <h1 style={myStyle}>jbcsai</h1>
            <h3 className="demo">pogo</h3>
            <h4 className={classes.body}>yo</h4>
            <h5 className={`${classes.body} demo`}> add more classes</h5>
        </div>
    );
};
export default Name;