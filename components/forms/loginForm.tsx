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
    const errors: ErrObj = {email: '', password: ''};
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

    const errors = validateForm()
    setError(errors)
    if (Object.values(errors).every(x => x === null || x === '')) {
      console.log(user)
    }

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
                  
                  <input type="submit" value="Sign in" disabled={false} className='btn btn-primary btn-form' />
                
               
            </form>    
            <div className="linkbox">
                <p className='body'> Not a member? <span className='link-text'><Link href='/signup' as='/signup'><p className='link'>Sign Up</p></Link></span></p>
            </div>

            <style jsx>{`
      
        .forgot {
          padding: .5rem 0 1rem 0;
        }
  
      `}</style>
        </div>


    )
};
export { LoginForm};