import React, {Component} from 'react';
import Home from './Home';
import SignUp from "./SignUp";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";

export default class App extends React.Component{

    render() {

        return(
            <Router>

                {/*<Home />*/}
                {/*<SignUp />*/}
                {/*<Route path={"/signUp"} exact component={"SignUp"}/>*/}
                <Switch>
                    <Route exact path={"/"}>
                    <Home/>
                    </Route>
                    <Route exact path={"/signUp"}>
                        <SignUp/>
                    </Route>
                </Switch>



            </Router>
        );
    }
};