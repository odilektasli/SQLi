import React from 'react'
import {
    Switch,
    Redirect,
    Route,
    BrowserRouter
} from 'react-router-dom'

import Home from './components/Home'
import LoggedIn from './components/LoggedIn'
import "./App.module.css"
function App() {

    return (
        <BrowserRouter>

            <Switch >
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/loggedin">
                    <LoggedIn />
                </Route>
            </Switch>

        </BrowserRouter>
    )

}

export default App