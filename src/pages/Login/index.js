import React, {useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import ImageUploader from '../../components/ImageUploader';
import '../Login/style.css';
export default function Login(props) {
    const navigate = useNavigate();
    useEffect(()=>{
        if(props.isLoggedIn){
            navigate("/dashboard")
        }
       
      
    },[props.isLoggedIn])

    const [username, setUsername] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [signupEmail, setSignupEmail] = useState("")
    const [signupPassword, setSignupPassword] = useState("")

    const [imageCloudinaryData, setImageCloudinaryData] = useState('');

    const loginHandle=e=>{
      e.preventDefault();
      props.handleLoginSubmit({
        email:loginEmail,
        password:loginPassword
      })
    }
    const signupHandle=e=>{
      e.preventDefault();
      props.handleSignupSubmit({
        email: signupEmail,
        password: signupPassword,
        username: username,
        picture: `https://res.cloudinary.com/digyae86x/image/upload/v1670654642/${imageCloudinaryData.public_id}`
      })
    }
    const handleImgResponse = (response) => {
      setImageCloudinaryData(response.data)
    } 
  return (
    <div className='loginPage'><div className="loginpageContainer">
      <form onSubmit={loginHandle} className="login">
        <h3><span>Login</span></h3>
        {/* <label htmlFor="username">User name:</label>
        <input name="username"  value={username} onChange={e=>setUsername(e.target.value)}/> <br /> */}
        <label htmlFor="email">Email address:</label>
        <input name="email"  value={loginEmail} onChange={e=>setLoginEmail(e.target.value)}/> <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={loginPassword} onChange={e=>setLoginPassword(e.target.value)}/> <br />
        <button>Log in!</button>
      </form>
      <form onSubmit={signupHandle}  className="signup">
        <h3><span>Signup</span></h3>
         <label htmlFor="username">User name:</label>
        <input name="username"  value={username} onChange={e=>setUsername(e.target.value)}/>  <br />
        <label htmlFor="email">Email address:</label>
        <input name="email"  value={signupEmail} onChange={e=>setSignupEmail(e.target.value)}/> <br />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={signupPassword} onChange={e=>setSignupPassword(e.target.value)}/> <br />
        <div className='profilepic'>
        <label>Profile Picture:</label>
        <ImageUploader 
                imageCloudinaryData={imageCloudinaryData} 
                handleImgResponse={handleImgResponse}/> 
        </div>
        <button>Signup!</button>
      </form>
    </div>
    </div>
  )
}





// import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helper';
// import '../Login/style.css';


// function Login() {
    
//     const [formState, setFormState] = useState({ username: '', email: '', password: '' });

//     const [errorMessage, setErrorMessage] = useState('');
//     const { username, email, password } = formState;

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!errorMessage) {
//             console.log('Submit Login Info', formState);
//         }
//     };

//     const handleChange = (e) => {
//         if (e.target.name === 'email') {
//             const isValid = validateEmail(e.target.value);
//             if (!isValid) {
//                 setErrorMessage('Your email is invalid.');
//             } else {
//                 setErrorMessage('');
//             }
//         } else {
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} is required.`);
//             } else {
//                 setErrorMessage('');
//             }
//         }
//         if (!errorMessage) {
//             setFormState({ ...formState, [e.target.name]: e.target.value });
//             //console.log('Handle Login submission', formState);
//         }
//     };

//     return (
//         <section className='loginPage'>
//             <h1>Sign in</h1>
//             <form id="login-form" onSubmit={handleSubmit}>
//                 <div className='signin-info'>
//                     <label htmlFor="username">Username:</label>
//                     <input type="text" name="username" defaultValue={username} onBlur={handleChange} />
//                 </div>
//                 <div className='signin-info'>
//                     <label htmlFor="email">Email address:</label>
//                     <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//                 </div>
//                 <div className='signin-info'>
//                     <label htmlFor="password">password:</label>
//                     <input name="password" defaultValue={password} onBlur={handleChange} />
//                 </div>
//                 {errorMessage && (
//                     <div className='login-info'>
//                         <p className="error-text login-info">{errorMessage}</p>
//                     </div> 
//                 )}
//                 <button className="button login-info" type="submit">Sign In</button>
//                 <div className="signUp login-info" type="submit"> New User? Enter your desired username and password and <button> Sign Up</button>
//                 </div>
//             </form>
//         </section>
//     );
// }

// export default Login;
