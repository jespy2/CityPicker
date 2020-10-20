import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import UI from './components/UI';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CssBaseline>
          <UI />
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
