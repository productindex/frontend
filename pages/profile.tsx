import React, {useEffect, useState} from 'react'
import { Authentication } from '../api/auth';
import { TextField } from '../components/textfield';
import { Dropdown } from '../components/dropdown';

import NavBar from '../components/navbar';
import ProfileSidebar from '../components/ProfileSidebar';

type Props = {}
interface ErrObj {
  firstname?: string;
  lastname?: string;
  email?: string;
  telephone?: string;
  birthday?: string;
  gender?: string;
  country?: string;
  state?: string;
  city?: string;
}

export default function Profile  (props: Props) {

    const loadUserDetails = async () => {
        const { data } = await Authentication.getUserDetails()
        setFirstName(data.first_name)
        setLastName(data.last_name)
        setGender(data.gender)
        setCountry(data.country)
        setTelephone(data.primary_phone_contact)
        setCity(data.city)
        setState(data.state)
    }
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState<ErrObj>({});
    const [telephone, setTelephone] = useState('');
    const [city, setCity] = useState('');
    const [formChange, setFormChange] = useState(true)

    const user = {
      first_name: firstname,
      last_name: lastname,
      gender,
      country,
      state,
      primary_phone: telephone,
      city
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
    useEffect(()  => {
        loadUserDetails()
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(user)
    }

    const handleChange = (e) => {
      e.preventDefault()
      setFormChange(false)
  }
    

  return (
  <div className='container'>
    <NavBar />
    <br />
    <div className="side-by-side">
      <ProfileSidebar />
      <div className='profile'>
              <h4>Profile - Your information</h4>
              <hr />
              <form onSubmit={handleSubmit} onChange={handleChange}>

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
  
                  <Dropdown 
                    valueLabel='Gender'
                    optionList={genderList}
                    onChange={(e: any)=> setGender(e.target.value)}
                    error={error.gender}
                    value={gender}
                    
                  />

                <div className="double-textbox">
                  <Dropdown 
                      valueLabel='Country'
                      optionList={[{name: "The Bahamas", value: "BAH"}]}
                      onChange={(e: any)=> setCountry(e.target.value)}
                      error={error.country}
                      value={country}
                      
                    />
                  <Dropdown 
                      valueLabel='State/Island'
                      optionList={[{name: "New Providence", value: "NEW PROVIDENCE"}]}
                      onChange={(e: any)=> setState(e.target.value)}
                      value={state}
                      error={error.state}
                      
                  />
                </div>

                <TextField 
                      name='city'
                      valueType='text'
                      valueLabel='City'
                      onChange={(e: any)=> setCity(e.target.value)}
                      value={city}
                      className='med-textbox'
                      error={error.city}
                      
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