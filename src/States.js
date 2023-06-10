bh

h
bh




import { useLocation, useHistory, useEffect } from 'react-router-dom';

function MyComponent() {

  const location = useLocation();

  const history = useHistory();

  useEffect(() => {

    // Function to destroy the props state

    const destroyPropsState = () => {

      history.replace({

        ...location,

        state: {} // Replace the state with an empty object

      });

    };

    // Listen for changes in the pathname

    const unlisten = history.listen((newLocation) => {

      if (location.pathname !== newLocation.pathname) {

        destroyPropsState();

      }

    });

    // Clean up the listener when the component unmounts

    return () => {

      unlisten();

    };

  }, [location, history]);

  return (

    <div>

      {/* Rest of your component */}

    </div>

  );

}


h

import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

function MyComponent() {

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {

    const destroyState = () => {

      navigate(location.pathname, { replace: true, state: {} });

    };

    // Listen for changes in the URL path

    const unlisten = navigate(destroyState);

    return () => {

      unlisten(); // Cleanup the listener when the component unmounts

    };

  }, [navigate, location.pathname]);

  // Rest of your component

}




