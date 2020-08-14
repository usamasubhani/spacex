import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import BottomNav from './components/BottomNav/BottomNav';
import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';
import Home from './components/Home/Home';
import Upcoming from './components/Upcoming/Upcoming';

function App() {

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        
        <Paper>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="upcoming" element={<Upcoming />} />
              <Route path="latest" element={<h1>Latest</h1>} /> 
            </Routes>
            <BottomNav />
          </Router>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
