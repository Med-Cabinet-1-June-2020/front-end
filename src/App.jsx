import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Nav from './components/Nav'
import StrainList from './components/StrainList' 
import RecommendForm from './components/RecommendForm'

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Nav />

        <Switch>
          <Route path='/signin'>
           <Signin />
          </Route>

          <Route path='/'>
            <Signup />
          </Route>
        </Switch>
        <RecommendForm />
        <StrainList />
      </div>
    </>
  )
}

export default App
