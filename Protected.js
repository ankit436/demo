import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Example authentication check function
const isAuthenticated = () => {
  // Implement your authentication logic here
  return true; // Replace with actual authentication check
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} handleExtraComponents={handleExtraComponents} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default ProtectedRoute;



<ProtectedRoute
  exact
  path="/newroi/help"
  component={New_roi_help}
  handleExtraComponents={handleExtraComponents}
/>
