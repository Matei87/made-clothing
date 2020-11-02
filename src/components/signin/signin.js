import React, { useState } from 'react';
import './signin.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);

            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error);
        }
        console.log(email, password);

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
        <div className="sign-in col-md-10">
            {/* <h2>I already have an account</h2> */}
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
                <div className="buttons">
                    <input type="submit" value="SIGN IN" className="btn" />
                    <input type="submit" value="GOOGLE SIGN IN" className="btn google" onClick={signInWithGoogle} />
                </div>

            </form>
        </div>
    )
}

export default SignIn;