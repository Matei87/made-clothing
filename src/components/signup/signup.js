import React, { useState } from 'react';
import './signup.scss';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.value);
        setEmail('');
        setPassword('');
    }

    const handleChangeName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
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
        <div className="sign-up col-md-6">
            <h2>I do not have a account</h2>
            <span>Sign up with your email and password</span>

            <form onSubmit={handleSubmit}>
                <input
                    name="text"
                    type="text"
                    placeholder="Display Name"
                    className="form-control"
                    value={email}
                    onChange={handleChangeName}
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
                    name="password"
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={password}
                    onChange={handleChangePassword}
                    required
                />
                <input type="submit" value="SIGN UP" className="btn" />
            </form>
        </div>
    )
}

export default SignUp;