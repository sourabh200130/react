import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";

const Contact = () => {
    const[isName,setIsName]=useState(" ")
    const[isPassword,setIsPassword]= useState("")
    const handleNameChange = (event) =>{
        setIsName(event.target.value)
    }
    const handlePasswordChange = (event) =>{
        setIsPassword(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(isName,isPassword)
    }

    return(
        <div>
            <NavigationBar />
            <h1>Contact page Component</h1>
            <form>
                <label>name :</label>
                <input type="text" name="name" onChange={handleNameChange} />
                <label>Password :</label>
                <input type="password" name="password" onChange={handlePasswordChange} />
                <input type="submit" value="Submit" onChange={handleSubmit} />
            </form>
        </div>
    );
};
export default Contact;