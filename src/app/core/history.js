import { createBrowserHistory, createMemoryHistory } from 'history';

import { IS_BROWSER } from '../config';


const history = IS_BROWSER ? createBrowserHistory() : createMemoryHistory();

export default history;
