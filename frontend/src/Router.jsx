import React from 'react'
import {
    Switch,
    Redirect,
    Route,
    BrowserRouter
} from 'react-router-dom'

import Home from './components/Home'
import styles from "./App.module.css"
class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className={styles.App}>
                    <Switch >
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Router