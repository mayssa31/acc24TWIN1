import { useState } from "react";
import "./App.css";
import Events from "./components/events";


  function App() {

    const [show,setShow] = useState(true)
    let name = "Test";
    let person = {
      name: "Test",
      age: 30,
    };
    let b = true;

  const style1 = {
    color: 'red',
    backgroundColor: 'blue'
  }

  let students = [
    { name: "s1", age: 10 },
    { name: "s2", age: 20 },
    { name: "s3", age: 30 },
  ];
  
  function test() {
    console.log("I m here")
  }
  function getPerson(person1) {
    return person1;
  }

  return (
    <>
      
      

<Events />

    
</>
);
}



export default App
