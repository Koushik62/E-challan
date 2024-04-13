import React,{useState} from 'react';
import './CSS/login.css'
import bcrypt from 'bcryptjs';

const LoginSignup
=() =>{

    const[state,setState] = useState("Login");
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:"",
        companyname:"",
        number:""
    })

    const changeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login Function Executed", formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => (responseData = data));
    
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.errors);
        }
    };
    
    const signup = async () => {
        console.log("Signup Function Executed", formData);
        const hashedPassword = await bcrypt.hash(formData.password, 10); // Hash the password
    
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, password: hashedPassword }), // Send the hashed password
        })
            .then((response) => response.json())
            .then((data) => (responseData = data));
    
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.errors);
        }
    };
    
    return(

        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>{state}</h1>
                <div className='loginsignup-fields'>
                    
                    {state === "Sign Up"?<input name ='username' value ={formData.username} onChange={changeHandler} text="text" placeholder='Your name' />:<></>}
                    <div className='loginsignup-companyphone'>
                    {state === "Sign Up"?<input name='companyname'  value={formData.companyname} onChange={changeHandler}  placeholder='Enter the company name' />:<></>}    
                    {state === "Sign Up"?<input name='number' value={formData.number} onChange={changeHandler} placeholder='Enter Phone number' />:<></>}    
                    </div>
                    <input name='email' value={formData.email} onChange={changeHandler} text= "email" placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler}  text= "password" placeholder='Password' />
                </div>
                <button onClick={()=>{state === "Login"?login():signup()}}>Continue</button>
                {state === "Sign Up"?<p className='loginsignup-login'>Already have any account?<span onClick={()=>{setState("Login")}} > Login here</span></p>
                :<p className='loginsignup-login'>Creat an account?<span onClick={()=>{setState("Sign Up")}}   >Click here</span></p>}
                <div className='loginsignup-agree'>
                    <input type='checkbox' name='' id='' />
                    <p>By Continuing, i agree to the terms of use& privacy policy</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup

