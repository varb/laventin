import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import WebFont from 'webfontloader';
// import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// import { ConnectedRouter } from 'connected-react-router';

import theme from './app/theme';
import ScrollToTop from './app/components/ScrollToTop';
import HomeScreen from './app/modules/HomeScreen';
import ShareTrackScreen from './app/modules/ShareTrackScreen';
import Layout from './app/components/Layout';

// _loaded

const showPageContent = () => {
  document.body.classList.add('_loaded');
}

function App() {

  // load fonts
  useEffect(() => {
    const WebFontConfig = {
      active: function() {
        showPageContent();
      },
      inactive: function() {
        showPageContent();
      },
      google: {
        families: ['Montserrat:400,600,700,800,900']
      },
      timeout: 3000,
    };

    WebFont.load(WebFontConfig);
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme.darkNeon}>
        <Layout>
          <Router>
            <ScrollToTop>
              <Switch>
                <Route path="/" exact component={HomeScreen} />
                <Redirect from="/t" to="/" exact />
                <Route path="/t/:id" component={ShareTrackScreen} />
              </Switch>
            </ScrollToTop>
          </Router>
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
