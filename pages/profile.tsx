import React, {useEffect, useState} from 'react'
import { Authentication } from '@productindex/api/auth';
import { User } from '@productindex/api/user'
import { TextField } from '@productindex/components/formElements/Textfield';
import { Dropdown } from '@productindex/components/formElements/dropdown';
import { useFormik } from 'formik';
import * as Yup from "yup";
import {AuthSuccessMessages} from '@productindex/const/success'

import NavBar from '@productindex/components/Navigation/Navbar';
import ProfileSidebar from '@productindex/components/ProfileSidebar';
import { toasty } from '@productindex/util/toasty';
import { Datepicker } from '@productindex/components/formElements/Datepicker';
import { AuthErrorMessages } from "@productindex/const/errors";

//TODO: Add formik to this page
export default function Profile  () {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      telephone: "",
      birthday: "",
      gender: "",
      country: "",
      state: "",
      city: ""
    },
    onSubmit: async (values) => {
      const user = await User.updateProfile(values)
      if (user.success) setDisableButton(true)
      toasty('success', AuthSuccessMessages.updatedProfile) //TODO: Add this to a const
    },
    validationSchema: Yup.object({
      birthday: Yup.string().required(AuthErrorMessages.birthdayRequired),
      country: Yup.string().required(AuthErrorMessages.countryRequired),
      state: Yup.string().required(AuthErrorMessages.stateRequired),
      gender: Yup.string().required(AuthErrorMessages.genderRequired),
      city: Yup.string().required(AuthErrorMessages.cityRequired), 
      firstname: Yup.string()
      .required(AuthErrorMessages.firstNameRequired)
      .min(2, AuthErrorMessages.nameMinCharacters),
    lastname: Yup.string()
      .required(AuthErrorMessages.lastNameRequired)
      .min(2, AuthErrorMessages.nameMinCharacters),     
    }),
    enableReinitialize: true
  })

    const loadUserDetails = async () => {
        const { data } = await Authentication.getUserDetails()
        if (data) {
          console.log(data)
          formik.setFieldValue('firstname', data.first_name)
          formik.setFieldValue('lastname', data.last_name)
          formik.setFieldValue('gender', data.gender)
          formik.setFieldValue('country', data.country) //TODO: Match this with returned value from db
          formik.setFieldValue('state', data.state) //TODO: Match this with returned value from db
          formik.setFieldValue('telephone', data.primary_phone_contact)
          formik.setFieldValue('city', data.city)
          formik.setFieldValue('birthday', data.date_of_birth) //TODO: Match this with returned value from db
        }

    }
    const [disableButton, setDisableButton] = useState(true)

    const genderList = [
      {
        name: "Male",
        value: "Male"
      },
      {
        name: "Female",
        value: "Female"
      },
      {
        name: "Prefer not to say",
        value: "Unidentified"
      }
    ]
    useEffect(()  => {
        loadUserDetails()
    }, [])

    const handleChange = (e) => {
      e.preventDefault()
      setDisableButton(false)
  }
    //TODO: Add birthday field

  return (
  <div className='container'>
    <NavBar />
    <br />
    <div className="side-by-side">
      <ProfileSidebar />
      <div className='profile'>
              <h4>Profile - Your information</h4>
              <hr />
              <form onSubmit={formik.handleSubmit} onChange={handleChange}>

                <div className="double-textbox">
                  <TextField 
                        name='firstname'
                        valueType='text'
                        valuePlaceholder='John'
                        valueLabel='First name'
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        error={formik.errors.firstname}
                        showLabel
                        onBlur={formik.handleBlur}
                        
                    />
                    <TextField 
                        name='lastname'
                        valueType='text'
                        valuePlaceholder='Doe'
                        valueLabel='Last name'
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        error={formik.errors.lastname}
                        showLabel
                        onBlur={formik.handleBlur}
                        
                    />
                </div>
  
                  <Dropdown 
                    valueLabel='Gender'
                    optionList={genderList}
                    onChange={(e)=> formik.setFieldValue('gender', e.target.value)}
                    error={formik.errors.gender}
                    value={formik.values.gender}
                    showLabel
                    
                  />
                  <Datepicker
                    name='birthday'
                    valueLabel="Birthday"
                    onChange={(e)=> formik.setFieldValue('birthday', e.target.value)}
                    error={formik.errors.birthday}
                    value={formik.values.birthday}
                  />

                <div className="double-textbox">
                  <Dropdown 
                      valueLabel='Country'
                      optionList={[{name: "The Bahamas", value: "BAH"}]}
                      onChange={(e)=> formik.setFieldValue('country', e.target.value)}
                      error={formik.errors.country}
                      showLabel
                      value={formik.values.country}
                      
                    />
                  <Dropdown 
                      valueLabel='State/Island'
                      optionList={[{name: "New Providence", value: "NEW PROVIDENCE"}]}
                      onChange={(e)=> formik.setFieldValue('state', e.target.value)}
                      showLabel
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
                      error={formik.errors.city}
                      showLabel
                      onBlur={formik.handleBlur}
                      
                />
                  <TextField 
                      name='telephone'
                      valueType='telephone'
                      valuePlaceholder='242 123 4567'
                      valueLabel='Phone contact'
                      isOptional
                      onChange={formik.handleChange}
                      value={formik.values.telephone}
                      className='med-textbox'
                      error={formik.errors.telephone}
                      onBlur={formik.handleBlur}
                      showLabel
                      
                  />
                 
                 <input type="submit" value={formik.isSubmitting? "Saving changes..." : "Save Changes"} disabled={disableButton || formik.isSubmitting} className='btn btn-primary btn-form' />
              </form>
              <style>{`
                .profile {
                  margin-left: 10%;
                }

                h4 {
                  margin-bottom: .75rem;
                }
                form {
                  min-width: 550px;
              }
              
              `}
                
              </style>
      </div>
    </div>
    
    
    </div>
  )
}