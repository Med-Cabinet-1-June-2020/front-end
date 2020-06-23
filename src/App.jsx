import React from 'react'
import './App.css'
import Header from './components/Header'
import Signup from './components/Signup'
import Signin from './components/Signin'

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Signup />
        <Signin />
      </div>
    </>
  )
}

export default App
