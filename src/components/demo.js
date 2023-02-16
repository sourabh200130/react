import React from "react";
import Demo2 from "./Demo2";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./missedGoal";
const passordRegx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const Demo= (props) => {
    const x =10;
    const arr = ["a","b","c","d","e","f"];
    const handleClick = (x,y) =>{
        alert(x+y)
    }
const handleNameChange = (event) =>{
    console.log(event.target.value)
}
const handlePasswordChange = (event) =>{
    if(passordRegx.test(event.target.value)){
        console.log("password match");
    }
    else{
        console.log("password not matched");
    }
}
    return  <div> 
        <Demo2 para2={props.para}/>
        Demo Component
        <form>
            <label>Name :</label>
            <input type="text" name="name" onChange={handleNameChange}/>
            <label> Password :</label>
            <input type="password" name="password" onChange={handlePasswordChange} />
            <br />
            <input type="submit" value="submit" />
        </form>
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