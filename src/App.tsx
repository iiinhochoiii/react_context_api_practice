import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Store from 'contexts';

function App() {
  return (
    <Store>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Store>
  );
}

export default App;
