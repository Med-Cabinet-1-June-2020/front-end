import React, { useState, useEffect } from 'react'
import formSchema from '../validation/formSchema'
import * as Yup from 'yup'



const initialFormValues = {
  username: '',
  password: '',
}

const initialFormErrors = {
  username: '',
  password: '',
}

const initialUsers = []

const initalDisabled = true

const Signup = () => {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initalDisabled)

  const onInputChange = evt => {
    const { name, value } = evt.target

    Yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0] // investigate
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
    console.log(newUser)

  }

  // useEffect(() => {
  //   getUsers()
  // }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="entry">
      <h3>Sign up</h3>
      <p>Have an account already, Sign In</p>
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
              type='text'
            />
          </label>
        </div>
        <div className='submit-form'>
          <h4>Sign Up</h4>
          <button>Submit</button>
          <div className='errors'>
            <div>{formErrors.username}</div>
            <div>{formErrors.password}</div>
            <div></div>
            <div></div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup
