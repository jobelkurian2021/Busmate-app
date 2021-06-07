import React from "react";
import { Route, Redirect } from "react-router-dom";


export const Companyroute = ({
  component: Component,
  ...rest
}) => {
  return (
  
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("myemail")&& localStorage.getItem("role")==="Company") {
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
