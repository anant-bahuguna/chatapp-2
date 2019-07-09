import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import appStore from './Store'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Chat from './components/Chat'
import Profile from './pages/Profile'


const routing = (
    <Router>
      <div>
        <Route exact path="/" render={(props)=> <App store={appStore} />}
         />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/profile" render={(props)=> <Profile store={appStore} />} />
        
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById("root"));
