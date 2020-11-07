import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);
  return (
    <Route
      {...rest}
      component={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else return <Redirect to={"/login"} />;
      }}
    />
  );
};

export default PrivateRoute;
