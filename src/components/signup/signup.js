import React, { useState } from 'react';
import './signup.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase';


const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(e.target.value);
        if (password !== confirmPassword) {
            alert("Passwords don`t match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch (error) {
            console.log(error);
        }


    }

    const handleChangeDisplayName = (e) => {
        console.log(e.target.value);
        setDisplayName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    const handleChangeConfirmPassword = (e) => {
        console.log(e.target.value);
        setConfirmPassword(e.target.value);
    }

    return (
        <div className="sign-up col-sm-12 col-md-12 col-lg-10 p-0">

            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <input
                    name="displayName"
                    type="text"
                    placeholder="Display Name"
                    className="form-control"
                    value={displayName}
                    onChange={handleChangeDisplayName}
                    required
                />
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
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={handleChangeConfirmPassword}
                    required
                />
                <input type="submit" value="SIGN UP" className="btn" />
            </form>
        </div>
    )
}

export default SignUp;