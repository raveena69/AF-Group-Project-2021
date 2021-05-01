import React, {Component} from 'react';
import Home from './Home';
import SignUp from "./SignUp";

export default class App extends React.Component{

    render() {

        return(
            <div>
                <Home />
                {/*<SignUp />*/}

            </div>
        );
    }
};