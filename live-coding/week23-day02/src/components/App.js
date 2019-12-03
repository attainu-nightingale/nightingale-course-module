import React from 'react';

import {Route} from "react-router-dom";
import {Provider} from "react-redux"

import Menu from "./Menu";
import Profile from "./Profile";
import Search from "./Search";
import Trending from "./Trending";
import Logout from "./Logout";
import {store} from "../store/store"

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Menu/>
            </div>
            <div className="col-md-9">
              <Route path="/app/trending" component={Trending}/>
              <Route path="/app/search" component={Search}/>
              <Route path="/app/profile" component={Profile}/>
              <Route path="/app/logout" component={Logout}/>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;