import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth/";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRouter = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route exact path="/explore" component={Explore} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/:username" component={Profile} />
  </Switch>
);
const LoggedOutRouter = () => (
  <Switch>
    <Route exact path="/" component={Auth} />{" "}
  </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
  <Switch>{isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}</Switch>
);

export default AppRouter;
