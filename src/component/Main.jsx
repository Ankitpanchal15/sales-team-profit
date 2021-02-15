import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Header from './Header/Header';
import CardList from './Cards/CardList';
import ProfileCard from './RightSidebar/ProfileCard';
import Table from './Table';
import Events from './RightSidebar/Events';
import HeighChart from './HeighChart';
import Explore from './Explore';


const Main = () => {
  return (
    <>
      <div className="main-wrapper ">

        <Header />
        <div className="container-fluid pt-30">
          <div className="row px-xl-3">
            <div className="col-md-8 col-xl-9">

            <Switch>
            <Route exact  path="/">
                <HeighChart/>
                <CardList />
                <Table />
              </Route>
              <Route path='/explore' component={Explore} />
              <Route exact path='/profile' component={Explore} /> 
             
            </Switch>
             
            </div>
            <div className="col-md-4 col-xl-3 mt-3 mt-md-0">
              <ProfileCard />
              <Events />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Main;