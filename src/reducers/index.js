import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore (
    shoppingListItemReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
//Using Provider component in React Redux we've gave our components the ability to be connected to store. However we don't want every component to re-render in response to change state. Thus we must specify which changes to the store's state should prompt re-render, using connect()function. 