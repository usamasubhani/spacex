import React from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import BottomNav from './components/BottomNav/BottomNav';

function App() {
  return (
    <div className="App">
      <Navigation />
      <BottomNav />
    </div>
  );
}

export default App;
