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
        <button className='bluebtn'>Log in!</button>
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
        <div className='imgup'>
        <ImageUploader 
                imageCloudinaryData={imageCloudinaryData} 
                handleImgResponse={handleImgResponse}/> 
        </div>
        </div>
        <button className='bluebtn'>Signup!</button>
      </form>
    </div>
    </div>
  )
}



