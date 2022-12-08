import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import '../Login/style.css'


function Login() {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { username, email, password } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Login Info', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            //console.log('Handle Login submission', formState);
        }
    };

    return (
        <section className='loginPage'>
            <h1>Sign in</h1>
            <form id="login-form" onSubmit={handleSubmit}>
                <div className='signin-info'>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" defaultValue={username} onBlur={handleChange} />
                </div>
                <div className='signin-info'>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className='signin-info'>
                    <label htmlFor="password">password:</label>
                    <input name="password" defaultValue={password} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div className='login-info'>
                        <p className="error-text login-info">{errorMessage}</p>
                    </div> 
                )}
                <button className="button login-info" type="submit">Sign In</button>
                <div className="signUp login-info" type="submit"> New User? Enter your desired username and password and <button> Sign Up</button>
                </div>
            </form>
        </section>
    );
}

export default Login;
