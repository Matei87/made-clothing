import React, { useState } from 'react';
import './signin.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.value);
        setEmail('');
        setPassword('');
    }

    const handleChangeEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div className="sign-in col-md-6">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={handleChangePassword}
                    required
                />
                <input type="submit" value="SIGN IN" className="btn" />
            </form>
        </div>
    )
}

export default SignIn;