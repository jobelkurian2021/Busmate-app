import React from "react";
import { Route, Redirect } from "react-router-dom";


export const AdminRoute = ({
  component: Component,
  ...rest
}) => {
  return (
  
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("loginid")&& localStorage.getItem("role")==="Admin") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/Login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
