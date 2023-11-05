import "./App.css";

//  import classes from './App.css'
// import Carousel from './COMPONENTS/carousel'
// import { useState } from "react";
import Navbar from "./COMPONENTS/Navbar";
import Futer from "./COMPONENTS/futer";
import guy from "./assets/guy.jpg"
import Approuter from "./Approuter";

 function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Approuter/>
      <Navbar />

       <Futer /> 
    </div>
  );
}


export default App;
