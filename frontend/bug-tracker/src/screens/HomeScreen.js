import React, { useState } from "react";

export default function HomeScreen() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1> Hello Matt! This is the home screen</h1>
      <p>
        I am imported from The screen folder and I am called in the App.js file..
        as you can see below I use Javascript in the same file!
      </p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Add Me
      </button>
      <h2> {number}</h2>
    </div>
  );
}
