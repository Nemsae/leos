import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';  //  TAKEOUT
import injectTapEventPlugin from 'react-tap-event-plugin';

import theme from './assets/react-toolbox/theme.css';  //  TAKEOUT
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>, document.getElementById('root'), // eslint-disable-line no-undef
);

registerServiceWorker();
injectTapEventPlugin();
