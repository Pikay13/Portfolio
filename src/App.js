import React from 'react';
import Navbar from './components/navbar.js';  
import Mainview from './components/Mainview.js';

function App() {
  return (
    <div className="App">
      <div className="nav-wrap">
        <Navbar />
      </div>
      <div id="wrapper">
        <Mainview />
      </div>
    </div>
  );
}

export default App;
