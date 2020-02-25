import { createLogger } from 'redux-logger';
import { createStore, combineReducers } from 'redaction';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import { IS_BROWSER } from '../config';
// import appReducers from 'app/redux/reducers';
import history from './history';

// Initial state
const initialState = {}

// Reducers
const reducers = {
  // ...combineReducers(appReducers),
  router: connectRouter(history),
}

// Middlewares
const middlewares = []

middlewares.push(routerMiddleware(history))

if (IS_BROWSER && process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger({
    collapsed: true,
  }))
}

// Store
export const storeCreator = () => createStore({
  reducers,
  middleware: middlewares,
  resetStateOnActions: ['@RESET'],
  initialState,
})

const store = storeCreator()

export default store
