import './App.css';
import Image from "./assets/download.jpg";
import Demo from './components/Demo';

function App() {
  var x=10;
  var text;
  if(x===20){
    text = "Equal";
  }
  else{
    text = "not Equal"
  }
  return (
    <div className="App">
     <h1> hello world</h1>
     <h2>{50+5}</h2>
     <img src={Image} alt="pic"/>
     <h2> {text} </h2>
     <h3>{x>=10 ? "greater than or equal to 10" : "not equal to 10"}</h3>
    <Demo para = {text}/>
    </div>
  );
}

export default App;
