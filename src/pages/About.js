import axios from "axios";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";

const About = () => {
    const [isData,setIsData] =useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            console.log(res.data);
            setIsData(res.data);
        });
    },[]);
    return(
        <div>
            <NavigationBar />
            <h1>About page Component</h1>
            {isData.map((item)=>(
                <div key={item.id}>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
};
export default About;