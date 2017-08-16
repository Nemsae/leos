import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ThemeProvider from 'react-toolbox/lib/ThemeProvider';  //  Takeout
import Layout from 'react-toolbox/lib/layout/Layout';  //  Takeout

import Nav from '../Nav';
import Home from '../Home';
import Help from '../Help';
import Payout from '../Payout';
import Leos from '../Leos';

import theme from '../../assets/react-toolbox/theme';  //  Takeout

import style from './styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout style={style.wrapper}>
      <BrowserRouter>
        <div style={{ width: '100%' }}>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/help' component={Help} />
            <Route exact path='/payout' component={Payout} />
            <Route path='/leos' component={Leos} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </BrowserRouter>
    </Layout>
  </ThemeProvider>
);

export default App;
