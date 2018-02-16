import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import HeaderSearchBar from '../containers/header-search-bar';
import ParkDetails from '../containers/park-details';
import ParkList from '../containers/park-list';
import ParkFavorites from '../containers/park-favorites';
import Home from '../containers/home';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderSearchBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:stateCode" component={ParkList} />
          <Route path="/parks/:parkCode" component={ParkDetails} />
          <Route path="/parks/favorites" component={ParkFavorites} />
        </Switch>
      </div>
    )
  }
}
