import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Registration } from "./register"; //curly because it is not the default component
import { Login } from "./login";

export function Welcome() {
    return (
        <div id="wlcm-container">
            <div className="wlcm header">
                <h1 className="logoName">AFROPUNK</h1>
                <nav>
                    <a href="#">About</a>
                    <a href="#">Register</a>
                    <a href="#">Login </a>
                    <a href="/http://www.afropunk.com/">AFROPUNK Festival</a>
                </nav>
            </div>

            <div className="wlcm body">
                <video className="videoTag" type="video/mp4" autoPlay loop>
                    <source src="/public/afropunk.mp4" type="video/mp4" />
                </video>
            </div>

            <HashRouter>
                <div>
                    <Route exact path="/" component={Registration} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>

            <div className="wlcm footer">
                <footer className="wlcm-footer">
                    Copyright &copy; 2018 Natasha Silvestre
                </footer>
            </div>
        </div>
    );
}
