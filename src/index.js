import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import {createStore,compose,applyMiddleware,combineReducers} from "redux";
import burgerRreducer from "./store/reducers/burgerBuilder"
import orderReducer from "./store/reducers/Order"
import thunk from "redux-thunk"

const reducer = combineReducers({
  burgerBuilder: burgerRreducer,
  orders: orderReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
  <Provider store = {store}>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  </Provider>
)

ReactDOM.render(
 app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
