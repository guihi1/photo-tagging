import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="">
        <img src="/images/find-waldo.jpg" alt="find waldo image" />
      </div>
    </>
  );
}

export default App;
