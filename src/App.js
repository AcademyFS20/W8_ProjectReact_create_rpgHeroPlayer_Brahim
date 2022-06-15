import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import './index.css'
import {
    Home, About, FAQ, Error, Character
} from "./pages"

import {
    Footer, Navbar, Sidebar
} from "./components"



function App() {
    return (
        <Router>
            <Navbar />
            {/* <Sidebar /> */}
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/character">
                    <Character />
                </Route>
                <Route path="/faq">
                    <FAQ />
                </Route>
                <Route exact path="*">
                    <Error />
                </Route>
            </Switch>

            <Footer />
        </Router>
    );
}


export default App;