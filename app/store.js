import configureStore from './configureStore';
import createHistory from 'history/createBrowserHistory';
const initialState = {};
const history = createHistory();
export  const store = configureStore(initialState, history);