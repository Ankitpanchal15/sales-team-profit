import React from 'react'
import {Switch,Route} from 'react-router-dom';

const HeaderTitle = () => {
    return(
        <>
            <Switch>
              <Route exact path='/'>
                  <h2>Your Profit</h2> 
                </Route> 
                <Route exact path='/explore'>
                  <h2>Explore</h2> 
                </Route> 
                <Route exact path='/profile'>
                  <h2>Profile</h2> 
                </Route> 
                <Route exact path='/videos'>
                  <h2>videos</h2> 
                </Route> 
                  <Route exact path='/invite'>
                  <h2>Invite</h2> 
                </Route> 
                <Route exact path='/music'>
                  <h2>Music</h2> 
                </Route> 
                <Route exact path='/candidates'>
                  <h2>Candidates</h2> 
                </Route> 
                <Route exact path='/calendar'>
                  <h2>Calendar</h2> 
                </Route> 
                <Route exact path='/feedback'>
                  <h2>Feedback</h2> 
                </Route> 
                <Route exact path='/help'>
                  <h2>Help</h2> 
                </Route> 
            </Switch>

        </>
    )
}

export default HeaderTitle;