import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Recpies from './Recpies'
import ContactForm from './ContactForm'
import App from './App'


function Routes() {
    return (
        <BrowserRouter>
          
            <Switch>
                <Route path="/">
                    <App />
                </Route>
                <Route path="/food">
                    <Recpies />
                </Route>
                <Route path="contactus">
                    <ContactForm />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
