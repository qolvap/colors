import React, { useState } from "react";
import "./App.css"; 

const CallBack = ({ getColor }) => {
  const [activecolor, setActiveColor] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value); 
  };

  return (
    <input
      placeholder="Type color"
      type="text"
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={activecolor}
    />
  );
};

export default CallBack;

