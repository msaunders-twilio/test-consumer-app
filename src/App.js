import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import { HelloWorld } from "@segment/email-editors";

function App() {
  return (
    <div className="App">
      <p>
        Test component:
      </p>
      <HelloWorld />
    </div>
  );
}

export default App;
