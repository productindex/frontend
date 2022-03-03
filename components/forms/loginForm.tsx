import React, {useState} from 'react';
import Link from 'next/link';
import { TextField } from '../textfield';
// import axios from 'axios'
import * as Joi from 'joi';
const { joiPassword } = require("joi-password");

const LoginForm: React.FC = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState<ErrObj>({});

interface ErrObj {
    email?: string;
    password?: string;
}

const schema = Joi.object({
    email: Joi.string().required().label('Email address').messages({'string.empty': 'Email address is required'}),
    password: Joi.string().required().messages({'string.empty': 'Password is required'}),
});
const user = {
    email,
    password
}


// Validates form properties and sets the Error state
const validateForm = () => {
    const errors: any = {email: '', password: ''};
    const options = {abortEarly: false}
    const { error } = schema.validate({email: email, password: password}, options );
    if (error) {
        for (let e of error.details) {
            let message = e.message.replaceAll("\"", "")
            errors[e.path[0]] = message.charAt(0).toUpperCase() + message.slice(1);
        } 
        return errors;
    }
    return errors
    
}
const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(validateForm());
    console.log(user);

};

    return (
        <div className='form pane-form'>

            <form onSubmit={handleSubmit}>
                <TextField 
                    name='email'
                    valueType='email'
                    valuePlaceholder='me@example.com'
                    valueLabel='Email address'
                    onChange={(e: any)=> setEmail(e.target.value)}
                    value={email}
                    className='med-textbox'
                    error={error.email}
                />
                <TextField 
                    name='password'
                    valueType='password'
                    valueLabel='Password'
                    onChange={(e: any)=> setPassword(e.target.value)}
                    value={password}
                    className='med-textbox'
                    error={error.password}
                />
                  <div className="forgot">
                    <Link href='/forgot-password'><p className='link'>Forgot password?</p></Link>
                  </div>
                  
                  <input type="submit" value="Sign in" className='btn btn-primary btn-form' />
                
               
            </form>    
            <div className="linkbox">
                <p className='body'> Not a member? <span className='link-text'><Link href='/signup'><p className='link'>Sign Up</p></Link></span></p>
            </div>

            <style jsx>{`
        .auth-screens {
          height: 97vh;
        }
        .auth-screens .side-by-side {
          height: 100%;
        }
        .auth-screens .leftpane  p{
          color: white;
          font-size: 1.2rem;
        }
        .side-by-side {
          display: flex;
          
        }
        .right {
          text-align: right;
        }
        .link {
          color: #13C8C4;
          cursor: pointer;
          display: inline-block;
          font-weight: 500;
          transition: all .4s;
        }
        .link:hover {
          color: #4BE0DD;
        }
        .link:active {
          color: #2EB7BE;
        }
        .logo-box img{
          width: 200px;
        }

        .leftpane {
          width: 55%;
          padding: 10rem 0 5% 5%;
          background-color: #13C8C4;
          
        }
        .forgot {
          padding: .5rem 0 1rem 0;
        }
        .leftpane .content {
            max-width: 450px;
        }
        .rightpane {
          width: 45%;
          padding-right: 5%;
          padding: 6rem 5% 5% 1.5rem;
        }
        .leftpane h2 {
          color: white;
          text-transform: uppercase;
        }
        .btn-primary {
          background-color: #13C8C4;
          color: white;
        }
        .btn-primary:hover {
          background-color: #4BE0DD;
        }
        .btn-primary:active {
          background-color: #2EB7BE;;
        }
        .btn {
          display: inline-block;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.4s;
          border-radius: 2px;
          cursor: pointer;
          outline: none;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
        .btn:active {
          transform: scale(.99);
        }
        .btn-form {
            padding: 12px 24px;
            font-size: 1.125rem;
            font-weight: 700;
            width: 100%;
            border: 0;
            
        }
        .btn-primary:focus {
          box-shadow: 0px 0px 0px 4px #89E3E1;
        }
        .linkbox {
          margin: 2rem 0 1rem 0;
        }
  
      `}</style>
        </div>


    )
};
export { LoginForm};