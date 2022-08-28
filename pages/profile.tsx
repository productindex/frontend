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
import { genderList } from "@productindex/const/dropdownInputs/genderList";
import { Avatar } from '../components/bits/Avatar';
import { ImageUpload } from '@productindex/components/formElements/ImageUpload';
import { locationList } from "@productindex/const/dropdownInputs/location";
import Head from "next/head";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";

//TODO: Add formik to this page
export default function Profile  () {
  const [displayPic, setDisplayPic] = useState('')
  const [uploadedDisplayPic, setUploadedDisplayPic] = useState('')
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
          setDisplayPic(data.profile_pic_url)
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
    const router = useRouter();
    useEffect(()  => {
      if (!Cookies.get('isLoggedIn')) {
        router.replace("/");
      }
      loadUserDetails()
    }, [])

    const handleChange = (e) => {
      e.preventDefault()
      setDisableButton(false)
  }
    //TODO: Add birthday field

  const uploadPhoto = (e) => {
    setUploadedDisplayPic(e.target.files[0].name)
    console.log(e.target.files[0].name)
  }
  return (
    <>
      <Head>
        <title>Product Index: Your profile details</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <body>
        

  <main>
  <div className='container'>
    <NavBar />
    <br />
    <div className="side-by-side">
      <ProfileSidebar />
      <div className='profile'>
        <div className="form">
          <div className="form-header">
            <h4>Profile - Your information</h4>
            <hr />
          </div>

          <form onSubmit={formik.handleSubmit} onChange={handleChange}>
            <Avatar displayPhotoSrc={displayPic}/>
            <ImageUpload name='Change profile picture' valueLabel='Change profile picture' showLabel={false} onChange={uploadPhoto}/>

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
                  optionList={Object.keys(locationList).map((value) => {
                    return {name: value, value: value}
                  })}
                  onChange={(e)=> formik.setFieldValue('country', e.target.value)}
                  error={formik.errors.country}
                  showLabel
                  value={formik.values.country}
                  
                />
              <Dropdown 
                  valueLabel='State/Island'
                  optionList={locationList[formik.values.country] && locationList[formik.values.country].map((value) => {
                    return {name: value, value: value}
                  })}
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
        </div>

        <style>{`
          .profile {
            width: 100%
          }

          h4 {
            margin-bottom: .75rem;
          }
          form,
          .form-header {
            max-width: 450px;
            width: 70%;
            margin: 0 auto;
            
          }
          form {
            margin-bottom: 3rem;
          }
          @media (max-width: 940px) {
            .side-by-side {
              flex-direction: column;
            }

          form,
          .form-header {
            width: 100%
          }
            .rightpane {
              width: 100%;
            }
          }
        
        `}
          
        </style>
      </div>
    </div>
    
    
    </div>
    </main>
    <footer>
        <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
      </footer>
    </body>
    </>
  )
}