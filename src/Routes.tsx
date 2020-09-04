import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" component = {() => <h1>Hello world</h1>}/>
            </Switch>
        </BrowserRouter>
    )
}
