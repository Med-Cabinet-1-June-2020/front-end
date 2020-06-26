import React from 'react'
import StrainList from './StrainList'
import RecommendForm from './RecommendForm'
import { Switch, Route } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h3>Dashboard</h3>
            <h4>Saved Strains:</h4>
                <div>
                    
                </div>
            <Switch>
                <Route path='/dashboard/strainlist'>
                    <StrainList />
                </Route>
                <Route path='/dashboard'>
                    <RecommendForm />
                </Route>

            </Switch>
        </div>
    )
}
export default Dashboard