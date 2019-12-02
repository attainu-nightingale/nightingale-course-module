import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import './index.css';
import App from './components/App';
import Login from './components/Login';

class Home extends React.Component {

    doRedirect(){
        let loggedIn = localStorage.getItem("user");

        if(loggedIn){
            return <Redirect to="/app/trending"/>;
        }
        else{
            return <Redirect to="/login"/>;
        }
    }

    render(){
        return (
            <Router>
                <Route path="/app" component={App}/>
                <Route path="/login" component={Login}/>
                {/* Declarative Routing */}
                {this.doRedirect()}
            </Router>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));
