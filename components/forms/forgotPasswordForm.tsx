import React from 'react';
import Link from 'next/link';
import { TextField } from '../textfield';
import { Authentication } from '../../api/auth';
import { toasty } from '../../util/toasty'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const ForgotPasswordForm: React.FC = () => {

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: async (values) => {
            const response = await Authentication.forgotPassword(values.email)
            if (response.success) toasty('success', 'We\'ve sent reset instructions to your email address!') //TODO: Add this to const
        },
        validationSchema: Yup.object({
            email:  Yup.string().email('This doesn\'t seem like a valid email').required('Email address is required') // TODO: Add to const
        })
        
    })

    return (
        <div className='form pane-form'>
            <form onSubmit={formik.handleSubmit}>
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

                <input type="submit" value="Send me reset instructions" className='btn btn-primary btn-form' disabled={formik.isSubmitting}/>
                
            </form>    
            <div className="linkbox">
                <p className='body'> Remembered? <span className='link-text'><Link href='/signin'><a className='link'>Sign In</a></Link></span></p>
            </div>
        </div>


    )
};
export { ForgotPasswordForm};