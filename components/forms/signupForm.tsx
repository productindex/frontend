import React, {useState} from 'react';
import Link from 'next/link';
import { TextField } from '../textfield';
// import axios from 'axios'
import * as Joi from 'joi';
const { joiPassword } = require("joi-password");

const SignupForm: React.FC = () => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<ErrObj>({});
  

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
    const errors: any = {emailError: '', passwordError: '', firstnameError: '', lastnameError: ''};
    const options = {abortEarly: false}
    const { error } = schema.validate({email: email, password: password, firstname: firstname, lastname: lastname}, options );
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
      setError(validateForm())
      console.log(user)
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
                      name='firstname'
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
                  <p className='body body-small'>Creating an account means that you’ve read and agreed to our <span className="link-text"><Link href='terms-of-service'><p className='link'>Terms of Service</p></Link> </span> and <span className="link-text"><Link href='/privacy'><p className='link'> Privacy policy </p></Link></span></p> 
                </div>
                 
                 <input type="submit" value="Sign up" className='btn btn-primary btn-form' />
              </form>
              <div className="linkbox">
                <p className='body'> Already a member? <span className='link-text'><Link href='/signin'><p className='link'>Sign In</p></Link></span></p>
              </div>

            <style jsx>{`
        .auth-screens {
          min-height: 97vh;
        }
        .legal-box p{
          font-size: 1rem;
          display: inline-block;
        }
        .legal-box {
          margin: 1rem 0;
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
        .double-textbox {
          display: flex;
          column-gap: 1rem;
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
export { SignupForm};