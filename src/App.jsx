import React from 'react'
import './App.css'
import Header from './components/Header'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Signup />
      </div>
    </>
  )
}

export default App
