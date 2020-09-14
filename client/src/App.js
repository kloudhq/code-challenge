import React from 'react';
import './App.css';

// Use this function to get Current Date
function getCurrentDate() {
  return "2020-06-20T12:27:40 +04:00"
}

function App() {
  return (
    <div className="App">
      <h1>Enter transaction id to check returnable product</h1>
      <input
        type="text"
        placeholder="Transacion id"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
