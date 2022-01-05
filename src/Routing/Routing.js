import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import '../css folder/App.css'
import '../css folder/utilities.css'
import "../css folder/Responsive.css"

import Header from "../Components/Header/Header";
import { About } from "../Pages/about/About ";
import { Home } from "../Pages/home/Home";
import My_work from "../Pages/work/My_work";
import Services from "../Pages/services/Services";
import Contact from "../Pages/contact/Contact";
import FullWidthBg from '../Components/fullWidthBg'
import Footer from "../Components/Footer";

const AppRouting = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <FullWidthBg routeName={"About"}/>
                    <About />
                </Route>
                <Route exact path="/My_work">
                    <FullWidthBg routeName={"Work"}/>
                    <My_work />
                </Route>
                <Route exact path="/Services">
                    <FullWidthBg  routeName={"Services"}/>
                    <Services />
                </Route>
                <Route exact path="/Contact">
                    <FullWidthBg routeName={"Contact"}/>
                    <Contact />
                </Route>
            </Switch>
            {/* <Footer /> */}
        </Router>
    )
}
export default AppRouting;
