import React from 'react';
import './signin-and-signup.scss';

import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';


const SignInAndSignUpPage = () => {
    return (
        <div className="signin-and-signup container">
            <div className="row">
                <ul class="nav nav-tabs col-md-5" id="myTab" role="tablist" >
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Already Registered?</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">New to Made?</a>
                    </li>
                </ul>
                <div class="tab-content col-md-8" id="myTabContent">
                    <div class="tab-pane fade show active col-md-10 " id="home" role="tabpanel" aria-labelledby="home-tab">
                        <SignIn />
                    </div>
                    <div class="tab-pane fade col-md-10 " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInAndSignUpPage;