import React from 'react';
import './css/Home.css';

export default class Home extends React.Component {

    render() {
        return(
            <div>
                <div className="out-background">
                    <div className="top-bar">
                    <div className="top-bar1">
                        {/*<img className="logo" src="./images/logo1.png"/>*/}
                        <div className="left">
                            <div className="conference-name">Welcome to International Conference on Application Frameworks [ICAF]</div>
                        </div>
                        <div className="right">
                            <div className="sign-up-back">
                                <div className="still-not-registered">Still not registered</div>
                                <a href="#" className="sign-up">Sign up Now</a>
                            </div>
                            <div className="sign-up-back">
                                <div className="already-registered">Already registered</div>
                                <a href="#" className="sign-in">Sign in Now</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        );
    }
};