import { useState } from "react";
import "./App.css";
import ImageMap from "./components/ImageMap";
import Navbar from "./components/Navbar";

function App() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  return (
    <>
      <Navbar isAtBottom={isAtBottom} />
      <div className="">
        <ImageMap setIsAtBottom={setIsAtBottom} />
      </div>
    </>
  );
}

export default App;
