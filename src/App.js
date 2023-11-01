import React, { useState } from "react";
import "./App.css";
import CallBack from "./CallBack.js";

export default function App() {
  const [UIcolor, setUIColor] = useState(null);

  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="App">
      <div
        className="App-color-container"
        style={{ background: UIcolor }}
      ></div>
      
      <CallBack getColor={getColor} /> 
    </div>
  );
}
