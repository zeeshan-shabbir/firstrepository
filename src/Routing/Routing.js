import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import '../css folder/App.css'
import '../css folder/utilities.css'

import Header from "../Components/Header/Header";
import { About } from "../Pages/about/About ";
import { Home } from "../Pages/home/Home";
import My_work from "../Pages/work/My_work";
import Services from "../Pages/services/Services";
import Contact from "../Pages/contact/Contact";
import FullWidthBg from '../Components/fullWidthBg'

 const AppRouting = () => {
    return (
        <Router>
            <Header />
            <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
            <FullWidthBg />
                <About />
            </Route>
            <Route exact path="/My_work">
            <FullWidthBg />
                <My_work />
            </Route>
            <Route exact path="/Services">
            <FullWidthBg />
                <Services />
            </Route>
            <Route exact path="/Contact">
            <FullWidthBg />
                <Contact />
            </Route>
            </Switch>          
        </Router>
    )
}
export default AppRouting;
