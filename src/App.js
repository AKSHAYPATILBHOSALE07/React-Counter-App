import "./styles.css";
import { useState } from "react";

const stateTutorial = () => {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <button onClick={increment}>Increment</button> 
      <h1>{counter}</h1>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};
export default stateTutorial;
