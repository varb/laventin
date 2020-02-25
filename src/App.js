import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { Route, Redirect } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './app/core/history';
import store from './app/core/store';
import HomeScreen from './app/modules/HomeScreen';
import ShareTrackScreen from './app/modules/ShareTrackScreen';

class App  extends React.Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap" rel="stylesheet" />
        </Helmet>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Route path="/" exact render={(p) => <HomeScreen {...p} />} />
            <Route path="/t" exact render={() => <Redirect to="/" />} />
            <Route path="/t/:id" render={(p) => <ShareTrackScreen {...p} />} />
          </ConnectedRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
