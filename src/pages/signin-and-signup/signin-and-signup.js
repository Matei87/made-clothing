import React from 'react';
import './signin-and-signup.scss';

import SignIn from '../../components/signin/signin';
import SignUp from '../../components/signup/signup';


const SignInAndSignUpPage = () => {
    return (
        <div className="signin-and-signup container">
            <div className="row">
                <SignIn />
                <SignUp />
            </div>
        </div>
    )
}

export default SignInAndSignUpPage;