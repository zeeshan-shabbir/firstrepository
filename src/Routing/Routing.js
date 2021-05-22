import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import '../css folder/App.css'
import '../css folder/utilities.css'

import Header from "../Components/Header";
import { About } from "../Pages/About ";
import { Home } from "../Pages/Home";
import My_work from "../Pages/My_work";

 const AppRouting = () => {
    return (
        <Router>
            <Header />
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/My_work">
                <My_work />
            </Route>
            </Switch>          
        </Router>
    )
}
export default AppRouting;
