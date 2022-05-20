import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { App } from './App';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )
));

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);