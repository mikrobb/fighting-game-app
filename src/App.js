import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function test() {
    setCount(count + 1);
  }

  return (
    <>
      <div onClick={() => test}></div>
      <div>{count}</div>
    </>
  );
}

export default App;
