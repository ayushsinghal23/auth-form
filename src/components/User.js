import React from 'react'
import { Route, Redirect, Switch } from "react-router-dom";
import Home from './Home/Home';


const User = () => {
    return (
        <div>
            <Redirect to="/"/>
            <Switch>
                <Route path="/" component={Home}></Route>
            </Switch>
            
        </div>
    )
}

export default User
