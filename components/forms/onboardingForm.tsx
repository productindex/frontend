import React, {useState} from 'react';
import Link from 'next/link';
import { TextField } from '../textfield';
// import axios from 'axios'
import * as Joi from 'joi';
import { Dropdown } from '../dropdown';
import { Datepicker } from '../datepicker';
const { joiPassword } = require("joi-password");

const OnboardingForm: React.FC = () => {

  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState<ErrObj>({});
  const [telephone, setTelephone] = useState('');
  

  interface ErrObj {
      email?: string;
      telephone?: string;
      birthday?: string;
      gender?: string;
      country?: string;
      state?: string;
  }
  const schema = Joi.object({
      birthday: Joi.string().required().messages({'string.empty': 'Birthday is required'}),
      country: Joi.string().required().messages({'string.empty': 'Country is required'}),
      state: Joi.string().required().messages({'string.empty': 'State is required'}),
      gender: Joi.string().required().messages({'string.empty': 'Gender is required'})
  });

  const user = {
    birthday,
    gender,
    country,
    state,
    telephone
}
  const validateForm = () => {
    const errors: any = {};
    const options = {abortEarly: false}
    const { error } = schema.validate({birthday: birthday, gender: gender, country: country, state: state}, options );
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
  const genderList = [
    {
      name: "Male",
      value: "MALE"
    },
    {
      name: "Female",
      value: "FEMALE"
    },
    {
      name: "Prefer not to say",
      value: "UNIDENTIFIED"
    }
  ]
  
      return (
          <div className='form pane-form'>
  
              <form onSubmit={handleSubmit}>
                <div className="double-textbox">

                  <Dropdown 
                    valueLabel='Gender'
                    optionList={genderList}
                    onChange={(e: any)=> setGender(e.target.value)}
                    error={error.gender}
                  />
                  <Datepicker 
                  valueLabel='Birthday'
                  onChange={(e: any)=> setBirthday(e.target.value)}
                  error={error.birthday}
                  />
                </div>
                <Dropdown 
                    valueLabel='Country'
                    optionList={[{name: "The Bahamas", value: "BAH"}]}
                    onChange={(e: any)=> setCountry(e.target.value)}
                    error={error.country}
                  />
                <Dropdown 
                    valueLabel='State/Island'
                    optionList={[{name: "New Providence", value: "NEW PROVIDENCE"}]}
                    onChange={(e: any)=> setState(e.target.value)}
                    error={error.state}
                  />

                  <TextField 
                      name='telephone'
                      valueType='telephone'
                      valuePlaceholder='242 123 4567'
                      valueLabel='Phone contact'
                      optional={true}
                      onChange={(e: any)=> setTelephone(e.target.value)}
                      value={telephone}
                      className='med-textbox'
                      error={error.telephone}
                  />
                 
                 <input type="submit" value="Complete sign up" className='btn btn-primary btn-form' />
              </form>

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
        .double-textbox {
          display: flex;
          width: 100%;
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
        @media (max-width: 850px) {
          .rightpane {
            width: 100%;

          }
          .double-textbox {
            flex-direction: column;
          }
        }
        @media (max-width: 450px) {
          .double-textbox {
            flex-direction: column;
          }

          }
        }

      `}</style>
        </div>


    )
};
export { OnboardingForm};