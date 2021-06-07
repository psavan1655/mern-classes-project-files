import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <React.Fragment>
            {console.log(props)}
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoutes;
