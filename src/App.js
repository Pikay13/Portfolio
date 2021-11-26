import React from 'react';
import Navbar from './components/navbar.js';  
import Mainview from './components/Mainview.js';

function App() {
  return (
    <div className="App">
        <Navbar />
        <div id="wrapper">
          <Mainview />
        </div>
    </div>
  );
}

export default App;
