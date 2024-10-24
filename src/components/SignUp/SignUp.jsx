import React from 'react';
import { useState } from 'react';
import "./SignUp.css";


const SignUp = () => {
      

    const [account,toggleAccount] = useState('login');

    function SignUp() {
      account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
  return (
    <>
    <div className='container'>
    {  account === 'signup'? 
      <div className='sign-container'>
     
      
       
       
      <h1>Sign Up </h1>
        <form method="post" action="#" className="form">
           

            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email" required/><br/>

           <label htmlFor="password">Password:</label><br/>
           <input type="password" id="password" name="password" required /><br/>

           <label htmlFor="password"> Confirm Password:</label><br/>
           <input type="password" id="password" name="password" required /><br/>

           <button type="submit" >Sign Up</button><br/>
        </form>
        <p>Or</p>
        <p>Existing User?<a  onClick={() => SignUp()}>Login</a></p>
      </div>
     :
       
       
         
      <div className='login-container'>
      <h1>Login</h1>
        <form method='post' action="#" className="form">
            

            <label htmlFor="email">Email:</label><br/>
            <input type="email" id="email" name="email" required/><br/>

           <label htmlFor="password">Password:</label><br/>
           <input type="password" id="password" name="password" required /><br/>

           <button type="submit">Login</button><br/>
        </form>
        <p>Or</p>
        <p>New User?<a href="#" onClick={ () => SignUp()}>SignUp</a></p>
      </div> }
   
     
      
    </div>
    </>
  );
}

export default SignUp;
