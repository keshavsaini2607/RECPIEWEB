import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Recpies from './Recpies'
import ContactForm from './ContactForm'
import App from './App'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/food" component={Recpies} />
                <Route exact path="/contactus" component={ContactForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
