// ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStore } from './path-to-your-store'; // Adjust the path to your store

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { logined } = useStore(); // Adjust according to your store structure

    return (
        <Route
            {...rest}
            render={props =>
                logined ? (
                    <Component {...props} {...rest} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
