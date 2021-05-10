import React from 'react'
import {
    Switch,
    Redirect,
    Route,
    BrowserRouter
} from 'react-router-dom'

import Home from './components/Home'

class Router extends React.Component{
    render() {
        return(
            <BrowserRouter>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            
            </BrowserRouter>
        )
    }
}

export default Router