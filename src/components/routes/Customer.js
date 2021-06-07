import React from "react";
import { Route, Redirect } from "react-router-dom";


export const Customeroute = ({
  component: Component,
  ...rest
}) => {
  return (
  
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("loginid")&& localStorage.getItem("role")==="customer") {
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
