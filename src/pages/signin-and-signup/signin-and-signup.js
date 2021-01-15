import React from 'react';
import './signin-and-signup.scss';

import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';


const SignInAndSignUpPage = () => {
    return (
        <div className="signin-and-signup container">
            <div className="row">
                <ul className="nav nav-tabs col-sm-10 col-md-7 col-lg-5" id="myTab" role="tablist" >
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Already Registered?</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">New to Made?</a>
                    </li>
                </ul>
                <div className="tab-content col-sm-12 col-md-10 col-lg-8" id="myTabContent">
                    <div className="tab-pane fade show active col-md-10 col-lg-10" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <SignIn />
                    </div>
                    <div className="tab-pane fade col-sm-12 col-md-10 col-lg-10" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInAndSignUpPage;