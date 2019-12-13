import React, { Component } from "react";
import SmurfList from "./SmurfList";
import AddSmurf from "./AddSmurf";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <AddSmurf />
      <SmurfList />
    </div>
  );
};

export default App;