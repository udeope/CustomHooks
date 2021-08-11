import React from 'react';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from "./LoginScreen";
import { HomeScreen } from "./HomeScreen";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/about" component={AboutScreen} />
              <Route exact path="/login" component={LoginScreen} />
              <Route exact path="/" component={HomeScreen} />

              {/* <Route component={ HomeScreen } /> */}
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    );
}
