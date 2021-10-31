import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// import { ConnectedRouter } from 'connected-react-router';

import theme from './app/theme';
import ScrollToTop from './app/components/ScrollToTop';
import HomeScreen from './app/modules/HomeScreen';
import ShareTrackScreen from './app/modules/ShareTrackScreen';

// _loaded

function App() {

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.add('_loaded');
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme.darkNeon}>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Redirect from="/t" to="/" exact />
              <Route path="/t/:id" component={ShareTrackScreen} />
            </Switch>
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
