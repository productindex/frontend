import React, {useState} from 'react';
import Link from 'next/link';
import { TextField } from '../textfield';
import { useRouter } from 'next/router'
import { AuthErrorMessages } from '../../const/errors';
import { useFormik } from 'formik'
import * as Yup from 'Yup'
import { User } from '../../api/user';

const SignupForm: React.FC = () => {

  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    },
    onSubmit: async (values) => {
        validateForm()
        localStorage.setItem('isSigningUp', 'true')
        router.replace({pathname: '/onboarding', query: {firstname: values.firstname, lastname: values.lastname ,email_address: values.email, password: values.password}}, '/signup')
    },
    validationSchema: Yup.object({
        email:  Yup.string().email('This doesn\'t seem like a valid email').required(AuthErrorMessages.emailAddressRequired), // TODO: Add to const
        password: Yup.string().required(AuthErrorMessages.passwordRequired).min(8),
        firstname: Yup.string().required(AuthErrorMessages.firstNameRequired).min(2, 'Name must have at least 2 characters'),
        lastname: Yup.string().required(AuthErrorMessages.lastNameRequired).min(2, 'Name must have at least 2 characters')
    })
})

  const validateForm = async () => {
    //TODO: Test to see if this still works
    const {data} = await User.find(formik.values.email, null)
    if (data) {
      formik.errors['email'] = AuthErrorMessages.emailTaken
    }
  }
  const router = useRouter()
  
      return (
          <div className='form pane-form'>
  
              <form onSubmit={formik.handleSubmit}>
                <div className="double-textbox">
                <TextField 
                      name='firstname'
                      valueType='text'
                      valuePlaceholder='John'
                      valueLabel='First name'
                      onChange={formik.handleChange}
                      value={formik.values.firstname}
                      className='med-textbox'
                      error={formik.errors.firstname}
                      onBlur={formik.handleBlur}
                  />
                  <TextField 
                      name='lastname'
                      valueType='text'
                      valuePlaceholder='Doe'
                      valueLabel='Last name'
                      onChange={formik.values.lastname}
                      value={formik.values.lastname}
                      className='med-textbox'
                      error={formik.errors.lastname}
                      onBlur={formik.handleBlur}
                  />
                </div>

                  <TextField 
                      name='email'
                      valueType='email'
                      valuePlaceholder='me@example.com'
                      valueLabel='Email address'
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className='med-textbox'
                      error={formik.errors.email}
                      onBlur={formik.handleBlur}
                  />
                  <TextField 
                      name='password'
                      valueType='password'
                      valueLabel='Password'
                      onChange={formik.handleBlur}
                      value={formik.values.password}
                      className='med-textbox'
                      error={formik.errors.password}
                      onBlur={formik.handleBlur}
                  />
                <div className="legal-box">
                  <small>Creating an account means that you’ve read and agreed to our <span className="link-text link"><Link href='/help/terms-of-service'><a className='link'>Terms of Service</a></Link> </span> and <span className="link-text"><Link href='/help/privacy'><a className='link'> Privacy policy </a></Link></span></small> 
                </div>
                 
                 <input type="submit" value="Sign up" className='btn btn-primary btn-form' />
              </form>
              <div className='linkbox'>
                <p> Already a member? <span className='link-text'><Link href='/signin'><a className='link'>Sign In</a></Link></span></p>
              </div>

            <style>{`
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