import React from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import BottomNav from './components/BottomNav/BottomNav';
import { ThemeProvider, createMuiTheme, Paper } from '@material-ui/core';

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
          <Navigation />
          <BottomNav />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
