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


              .double-textbox {
                display: flex;
                width: 100%;
                column-gap: 1rem;
              }

              @media (max-width: 850px) {
                .rightpane {
                  width: 100%;

                }
                .double-textbox {
                  flex-direction: column;
                }
              }
        `}</style>
        </div>


    )
};
export { OnboardingForm};