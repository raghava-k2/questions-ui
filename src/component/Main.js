import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouteWithSubRoutes } from '../util';
import routes from '../config/routes';
import { getStore } from '../store';

const store = getStore();

export default function Main() {
    return (
        <Provider store={store}>
            <Router>
                {routes.map((item, index) => (
                    <RouteWithSubRoutes key={index} {...item} />
                ))}
            </Router>
        </Provider>
    )
}