import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import 'antd/dist/antd.css';

import Router from './router';
import store from './store';
import { getTheme } from './theme';

const { theme, GlobalStyle } = getTheme('base');

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
