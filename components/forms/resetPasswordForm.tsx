import React, {useState} from 'react';
import Link from 'next/link';
import { TextField } from '../textfield';
// import axios from 'axios'
import * as Joi from 'joi';
const { joiPassword } = require("joi-password");
import { useRouter } from 'next/router'


const ResetPasswordForm: React.FC = () => {

const [password, setPassword] = useState('');
const [error, setError] = useState<ErrObj>({});
const router = useRouter()
const { token } = router.query // To verify password change


interface ErrObj {
    password?: string;
}

const schema = Joi.object({
  password: joiPassword.string().min(8).minOfSpecialCharacters(1).minOfLowercase(0).minOfUppercase(0).minOfNumeric(1).noWhiteSpaces().required().messages({'string.min': 'Password must be at least 8 characters long', 'string.empty': 'Password is required'}),
});
const user = {
    password
}


// Validates form properties and sets the Error state
const validateForm = () => {
    const errors: ErrObj = { password: ''};
    const options = {abortEarly: false}
    const { error } = schema.validate({password: password}, options );
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
                    name='password'
                    valueType='password'
                    valueLabel='Password'
                    onChange={(e: any)=> setPassword(e.target.value)}
                    value={password}
                    className='med-textbox'
                    error={error.password}
                />
                  
              <input type="submit" value="Reset my password" className='btn btn-primary btn-form' />
                
               
            </form>    
        </div>


    )
};
export { ResetPasswordForm};