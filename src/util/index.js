import React from 'react';
import { Route } from "react-router-dom";

export const RouteWithSubRoutes = (route) => {
    return (
        <Route
            exact
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )} />
    );
}