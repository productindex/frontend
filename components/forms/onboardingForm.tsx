import React, {useState, useEffect, useContext} from 'react';
import { TextField } from '../textfield';
import { Dropdown } from '../dropdown';
import { Datepicker } from '../datepicker';
import { useRouter } from 'next/router'
import { AuthErrorMessages } from '../../const/errors';
import AuthContext from '../../context/AuthContext'
import { Authentication } from '../../api/auth';
import { toasty } from '../../util/toasty';
import { AuthSuccessMessages } from '../../const/success';
import {useFormik} from 'formik'
import * as Yup from 'yup'


const OnboardingForm: React.FC = () => {
  const authCtx = useContext(AuthContext);

  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [gender, setGender] = useState('');
  const router = useRouter()
  const { firstname, lastname, password, email_address } = router.query

  useEffect(() => {
    window.addEventListener('beforeunload', alertUser)
    return () => {
      window.removeEventListener('beforeunload', alertUser)
    }
  }, [])
  const alertUser = e => {
    e.preventDefault()
    e.returnValue = ''
  }

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

  const formik = useFormik({
    initialValues: {
        birthday: '',
        country: '',
        state: '',
        gender: '',
        telephone: '',
        city: '',
    },
    onSubmit: async (values) => {
          const user = {
            first_name: firstname,
            last_name: lastname,
            email_address,
            password,
            dob: values.birthday,
            gender: values.gender,
            country : values.country,
            state : values.state,
            primary_phone: values.telephone,
            city: values.city
        }
        const res = await Authentication.register(user)
        if (res.success){
          localStorage.removeItem("isSigningUp");
          await Authentication.login(email_address, password)
          router.replace('/')
          authCtx.loadUser()
          toasty('success', AuthSuccessMessages.onboarding)

        }
    },
    validationSchema: Yup.object({
        birthday: Yup.string().required(AuthErrorMessages.birthdayRequired),
        country: Yup.string().required(AuthErrorMessages.countryRequired),
        state: Yup.string().required(AuthErrorMessages.stateRequired),
        gender: Yup.string().required(AuthErrorMessages.genderRequired),
        city: Yup.string().required(AuthErrorMessages.cityRequired)
    })
  })
      return (
          <div className='form pane-form'>
  
              <form onSubmit={formik.handleSubmit}>
                <div className="double-textbox">

                  <Dropdown 
                    valueLabel='Gender'
                    optionList={genderList}
                    onChange={formik.handleChange}
                    error={formik.errors.gender}
                    value={formik.values.gender}
                  />
                  <Datepicker 
                  valueLabel='Birthday'
                  onChange={(e: any)=> setBirthday(e.target.value)}
                  error={formik.errors.birthday}
                  value={formik.values.birthday}
                  />
                </div>
                <div className="double-textbox">
                  <Dropdown 
                      valueLabel='Country'
                      optionList={[{name: "The Bahamas", value: "BAH"}]}
                      onChange={formik.handleChange}
                      error={formik.errors.country}
                      value={formik.values.country}
                    />
                  <Dropdown 
                      valueLabel='State/Island'
                      optionList={[{name: "New Providence", value: "NEW PROVIDENCE"}]}
                      onChange={formik.handleChange}
                      error={formik.errors.state}
                      value={formik.values.state}
                  />
                </div>

                <TextField 
                      name='city'
                      valueType='text'
                      valueLabel='City'
                      onChange={formik.handleChange}
                      value={formik.values.city}
                      className='med-textbox'
                      error={formik.errors.city}
                      onBlur={formik.handleBlur}
                />

                  <TextField 
                      name='telephone'
                      valueType='telephone'
                      valuePlaceholder='242 123 4567'
                      valueLabel='Phone contact'
                      optional={true}
                      onChange={formik.handleChange}
                      value={formik.values.telephone}
                      className='med-textbox'
                      error={formik.errors.telephone}
                      onBlur={formik.handleBlur}
                  />
                 
                 <input type="submit" value="Complete sign up" disabled={formik.isSubmitting} className='btn btn-primary btn-form' />
              </form>

        </div>


    )
};
export { OnboardingForm};