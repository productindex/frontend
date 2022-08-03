import React, {useEffect, useState} from 'react'
import { Authentication } from '@productindex/api/auth';
import { TextField } from '@productindex/components/formElements/Textfield';
import { Dropdown } from '@productindex/components/formElements/Dropdown';
import { useFormik } from 'formik';
import * as Yup from "yup";

import NavBar from '@productindex/components/Navigation/Navbar';
import ProfileSidebar from '@productindex/components/ProfileSidebar';

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
      console.log(values)
    },
    validationSchema: Yup.object({

    }),
    enableReinitialize: true
  })

    const loadUserDetails = async () => {
        const { data } = await Authentication.getUserDetails()
        if (data) {
          formik.values.firstname = data.first_name 
          formik.setFieldValue('firstname', data.first_name)
          formik.setFieldValue('lastname', data.last_name)
          formik.setFieldValue('gender', data.gender)
          formik.setFieldValue('country', data.country)
          formik.setFieldValue('state', data.state)
          formik.setFieldValue('telephone', data.primary_phone_contact)
          formik.setFieldValue('city', data.city)
          formik.setFieldValue('birthday', data.birthday)
        }

    }
    const [formChange, setFormChange] = useState(true)

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
    useEffect(()  => {
        loadUserDetails()
    }, [])

    const handleChange = (e) => {
      e.preventDefault()
      setFormChange(false)
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
                 
                 <input type="submit" value="Save Changes" disabled={formChange} className='btn btn-primary btn-form' />
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