import React, { useState, useEffect } from 'react'
import signinSchema from '../validation/signinSchema'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const initialFormValues = {
    username: '',
    password: '',
}
  
  const initialFormErrors = {
    username: '',
    password: '',
}
  
const initialUsers = []
  
const initialDisabled = true
  
const Signin = () => {
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const onInputChange = evt => {
        const { name, value } = evt.target
    
        Yup
          .reach(signinSchema, name)
          .validate(value)
          .then(() => {
            setFormErrors({
              ...formErrors,
              [name]: ""
            });
          })
    
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0]
            });
          });
        
        setFormValues({
          ...formValues,
          [name]: value
        })
      
    }

    const onSubmit = evt => {
        evt.preventDefault()
    
        const newUser = {
          username: formValues.username.trim(),
          password: formValues.password.trim(),
        }
        console.log("Signup -> newUser", newUser)
        // console.log("Signup -> users", users)
        // postNewUser(newUser)
    
    }

    useEffect(() => {
        signinSchema.isValid(formValues).then(valid => {
          setDisabled(!valid)
        })
    }, [formValues])

    return (
        <div className="entry">
          <h3>Sign In</h3>
          <p>New User?
            <Link to={`/`}>
                <span>  Sign Up</span>
            </Link>
          </p>          
          <form className='form-container' onSubmit={onSubmit}>
            <div className='input-form'>
              <label>Username
                <input
                  value={formValues.username}
                  onChange={onInputChange}
    
                  name='username'
                  type='text'
                />
              </label>
              <label>Password
                <input
                  value={formValues.password}
                  onChange={onInputChange}
    
                  name='password'
                  type='password'
                />
              </label>
            </div>
            <div className='errors'>{formErrors.username}</div>
            <div className='errors'>{formErrors.password}</div>
            <div className='submit-form'>
              <button disabled={disabled}>Sign In</button>
            
            </div>
          </form>
        </div>
    ) 
}

export default Signin