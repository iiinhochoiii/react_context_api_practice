import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, CartPage, NotFoundPage } from './pages';

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
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Store>
  );
}

export default App;
