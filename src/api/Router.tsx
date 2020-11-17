import React from "react";
import { Route } from "react-router";
import App from "../app";
import Login from "../login";

function Router() {
  return (
    <>
      <Route path="/login" exact={true} component={Login} />
      <Route path="/app" component={App} />
    </>
  );
}

export default Router;
