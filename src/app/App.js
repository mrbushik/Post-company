/* eslint-disable no-unreachable */
import React from "react";
// import Users from "./components/users";
// import UsersList from "./components/usersList";
import Users from "./layouts/users";
import Login from "./layouts/login";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
