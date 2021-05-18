import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

const MyThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default MyThemeProvider;
