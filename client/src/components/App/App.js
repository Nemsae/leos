import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import ReactRouter from 'react-router-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';  //  Takeout
import Layout from 'react-toolbox/lib/layout/Layout';  //  Takeout

import Nav from '../Nav';
import Leos from '../Leos';

import theme from '../../assets/react-toolbox/theme';  //  Takeout

import style from './styles';

/*  React Router  */
// console.log('ReactRouter: ', ReactRouter);
// const Router = ReactRouter.BrowserRouter;
// const Route = ReactRouter.Route;
/*  React Router  */

const App = () => (
  <ThemeProvider theme={theme}>
    <Layout style={style.wrapper}>
      <BrowserRouter>
        <Nav />
        <Route path='/leos' component={Leos} />
      </BrowserRouter>
    </Layout>
  </ThemeProvider>
);
// const App = () => (
//   <ThemeProvider theme={theme}>
//     <Layout style={style.wrapper}>
//       <Switch>
//         <Route path='/' component={Leos} />
//       </Switch>
//     </Layout>
//   </ThemeProvider>
// );

export default App;
