import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
// import { BrowserRouter } from 'react-router-dom';

import theme from './assets/react-toolbox/theme.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') // eslint-disable-line no-undef
// );
// registerServiceWorker();
ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
