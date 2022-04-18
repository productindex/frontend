import React, {useState} from 'react';
import Link from 'next/link';
import { TextField } from '../textfield';
import { Authentication } from '../../api/auth';
import * as Joi from 'joi';

const ForgotPasswordForm: React.FC = () => {

const [email, setEmail] = useState('');
const [error, setError] = useState<ErrObj>({});
const [successMsg, setSuccessMsg] = useState('')

interface ErrObj {
    email?: string;
    password?: string;
}

const schema = Joi.object({
    email: Joi.string().required().label('Email address').messages({'string.empty': 'Email address is required'}),
});
const user = {
    email,
}


// Validates form properties and sets the Error state
const validateForm = () => {
    const errors: ErrObj = {email: '', password: ''};
    const options = {abortEarly: false}
    const { error } = schema.validate({email: email}, options );
    if (error) {
        for (let e of error.details) {
            let message = e.message.replace(/"/g, "")
            
            errors[e.path[0]] = message.charAt(0).toUpperCase() + message.slice(1);
        } 
        return errors;
    }
    return errors
    
}
const handleSubmit = async (e: any) => {
    e.preventDefault();

    const errors = validateForm()
    setError(errors)
    if (Object.values(errors).every(x => x === null || x === '')) {
        const response = await Authentication.forgotPassword(user.email)
        if (response.success) setSuccessMsg('We\'ve sent reset instructions to your email address!')        

    }

};

    return (
        <div className='form pane-form'>
            {successMsg && <div className="success-alert"> {successMsg} </div> }
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

                  <input type="submit" value="Send me reset instructions" className='btn btn-primary btn-form' />
                
            </form>    
            <div className="linkbox">
                <p className='body'> Remembered? <span className='link-text'><Link href='/signin'><a className='link'>Sign In</a></Link></span></p>
            </div>
        </div>


    )
};
export { ForgotPasswordForm};