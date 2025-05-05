import React from "react";
import { useState } from "react";

function Toggle() {
  const [isOn, setToggle]= useState(false);
  const handleClick=()=>{
    setToggle((isOn)=>(!isOn));
  }
  const color = isOn ? 'green':'red';
  return <button onClick={handleClick} style={{background : color}}>{isOn ? 'ON':'OFF'}</button>;
}

export default Toggle;
