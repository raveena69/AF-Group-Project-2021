import React from 'react';
import './css/Home.css';

export default class Home extends React.Component {

    render() {
        return(
            <div>
                <div className="out-background">
                    {/*Top section start*/}
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
                            <div className="date-back">
                                <div className="dates">21st, 22nd and 23rd December 2021</div>
                                <div className="institute">Sri Lanka Institute of Information Technology</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/*Top section end*/}

                    {/*Middle section start*/}
                    <div className="about-conference-back">
                    <div className="about-conference-back1">
                        <div className="about-conference">About Our Conference</div>
                        <div className="icaf-name">1st International Conference in Application Frameworks 2021 [ICAF]</div>
                        <div className="conference-para">The 1st International Conference on Application Frameworks [ICAF] is organized by the Faculty of Computing of the
                            Sri Lanka Institute of Information Technology (SLIIT) as an open forum for academics along with industry professionals
                            to present the latest findings and research output and practical deployments in the Computer Science and Information
                            Technology domains. Primary objective of the ICAF is to uplift the research culture and the quality of research done

                            by Sri Lankan researchers. This conference will create a platform for national and international researchers to
                            showcase their research output, networking opportunities to discuss innovative ideas, and initiate collaborative work.
                            ICAF 2019 and ICAF 2020 were successfully conducted with a technical co-sponsorship by IEEE Sri Lanka Section and all
                            publications are available in IEEE Xplore digital library.

                            <br/><br/>
                            December 21 - 23, 2021 in Sri Lanka Institute of Information Technology
                        </div>

                    </div>
                    </div>

                    {/*Middle section end*/}

                    {/*Guest Speakers start*/}
                    <div className="guest-back">
                        <div className="guest-back1">
                            <div className="guest-speaker">Guest Speakers</div>
                            <div className="person1">
                                <div className="person1-img"></div>
                                <div className="person1-content">PROF. Amelia Margaret <br/>
                                    Department of Software Engineering,<br/> Faculty of Science and Technology,<br/> London University.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};