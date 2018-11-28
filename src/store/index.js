
import { createStore } from 'redux'
// import { routerReducer, routerMiddleware } from 'react-router-redux'
import globalReducer from '../pages/global/reducer';
// import createHistory from 'history/createBrowserHistory'
// import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// export const history = createHistory();
// const middleware = routerMiddleware(history);
// const middlewares = [thunk, middleware];

const store = createStore(
  globalReducer,
  composeWithDevTools()
)
export default store;
