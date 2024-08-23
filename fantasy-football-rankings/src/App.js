import React from 'react';
import Tabs from './Components/Tabs';
import './App.css'; // Optional: If you have any global styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fantasy Football Rankings</h1>
      </header>
      <main>
        <Tabs />
      </main>
    </div>
  );
}

export default App;
