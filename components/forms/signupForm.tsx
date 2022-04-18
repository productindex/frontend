import React, {useState} from 'react';
import Link from 'next/link';
import { TextField } from '../textfield';
import * as Joi from 'joi';
const { joiPassword } = require("joi-password");
import { useRouter } from 'next/router'

const SignupForm: React.FC = () => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<ErrObj>({});
  const router = useRouter()

  interface ErrObj {
      email?: string;
      password?: string;
      firstname?: string;
      lastname?: string;
  }
  const schema = Joi.object({
      firstname: Joi.string().min(2).required().label('First name').messages({'string.empty': 'First name is required'}),
      lastname: Joi.string().min(2).required().label('Last name').messages({'string.empty': 'Last name is required'}),
      email: Joi.string().required().label('Email address').messages({'string.empty': 'Email address is required'}),
      password: joiPassword.string().min(8).minOfSpecialCharacters(1).minOfLowercase(0).minOfUppercase(0).minOfNumeric(1).noWhiteSpaces().required().messages({'string.min': 'Password must be at least 8 characters long', 'string.empty': 'Password is required'}),
  });

  const user = {
    firstname,
    lastname,
    email,
    password
}
  const validateForm = () => {
    const errors: ErrObj = {email: '', password: '', firstname: '', lastname: ''};
    const options = {abortEarly: false}
    const { error } = schema.validate({email: email, password: password, firstname: firstname, lastname: lastname}, options );
    if (error) {
      for (let e of error.details) {
          let message = e.message.replace(/"/g, "")
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
        localStorage.setItem('isSigningUp', 'true')
        router.replace({pathname: '/onboarding', query: {firstname: user.firstname, lastname: user.lastname ,email_address: user.email, password: user.password}}, '/signup')
      }
  };
  
      return (
          <div className='form pane-form'>
  
              <form onSubmit={handleSubmit}>
                <div className="double-textbox">
                <TextField 
                      name='firstname'
                      valueType='text'
                      valuePlaceholder='John'
                      valueLabel='First name'
                      onChange={(e: any)=> setFirstName(e.target.value)}
                      value={firstname}
                      className='med-textbox'
                      error={error.firstname}
                  />
                  <TextField 
                      name='lastname'
                      valueType='text'
                      valuePlaceholder='Doe'
                      valueLabel='Last name'
                      onChange={(e: any)=> setLastName(e.target.value)}
                      value={lastname}
                      className='med-textbox'
                      error={error.lastname}
                  />
                </div>

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
                <div className="legal-box">
                  <small>Creating an account means that you’ve read and agreed to our <span className="link-text link"><Link href='/help/terms-of-service'><a className='link'>Terms of Service</a></Link> </span> and <span className="link-text"><Link href='/help/privacy'><a className='link'> Privacy policy </a></Link></span></small> 
                </div>
                 
                 <input type="submit" value="Sign up" className='btn btn-primary btn-form' />
              </form>
              <div className='linkbox'>
                <p> Already a member? <span className='link-text'><Link href='/signin'><a className='link'>Sign In</a></Link></span></p>
              </div>

            <style jsx>{`
        .legal-box {
          width: 100%;
          display: inline-block;
          position: relative;
          transform: translateY(-1rem);
        }
  
      `}</style>
        </div>


    )
};
export { SignupForm};