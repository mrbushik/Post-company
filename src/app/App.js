/* eslint-disable no-unreachable */
import React from "react";
import Users from "./components/users";
import Login from "./layouts/login";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
function App() {
    return (
        <div>
            <Switch>
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </div>
    );
}

export default App;
