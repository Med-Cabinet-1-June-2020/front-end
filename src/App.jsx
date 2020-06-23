import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Signup from './components/Signup'
import Signin from './components/Signin'

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Switch>

          <Route path='/signin'>
           <Signin />
          </Route>

          <Route path='/'>
            <Signup />
          </Route>

        </Switch>
      </div>
    </>
  )
}

export default App
