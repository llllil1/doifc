/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";
import App from "../app";
import Login from "../login";
import { GlobalStyle } from "../shared/styles/GlobalStyle";

function Router() {
    return (
        <Fragment>
            <GlobalStyle />
            <Switch>
                <Redirect exact from="/" to="/app" />
                <Route path="/login" component={Login} />
                <Route path="/app" component={App} />
            </Switch>
        </Fragment>
    );
}

export default Router;
