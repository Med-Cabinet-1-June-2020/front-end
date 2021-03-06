import React, { useState, useEffect } from 'react'
import formSchema from '../validation/formSchema'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'






const initialFormValues = {
  username: '',
  primaryemail: '',
  password: '',
}

const initialFormErrors = {
  username: '',
  primaryemail: '',
  password: '',
}

const initialUsers = []

const initialDisabled = true

const Signup = () => {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  
  const postNewUser = newUser => {
  
      setUsers([...users, newUser])
      console.log("Signup -> users", users)
    
      setFormValues(initialFormValues)
    
  }
  const onInputChange = evt => {
    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)
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
      primaryemail: formValues.primaryemail.trim(),
      password: formValues.password.trim(),
    }
    console.log("Signup -> newUser", newUser)
    console.log("Signup -> users", users)
    postNewUser(newUser)

  }



  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  return (
    <div className="entry">
      <h3>Sign Up</h3>
      <p>Have an account already?
        <Link to={`/signin`}>
          <span>  Sign In</span>
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
          <label>Primary Email
            <input
              value={formValues.primaryemail}
              onChange={onInputChange}

              name='primaryemail'
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
        <div className='errors'>{formErrors.primaryemail}</div>
        <div className='errors'>{formErrors.password}</div>
        <div className='submit-form'>
          <Link to={`/signin`}>
            <button disabled={disabled}>Sign Up</button>
          </Link>
        </div>

      </form>
    </div>
  )
}

export default Signup
