import React from 'react'

import {
    BrowserRouter as DefaultRouter,
    Route,
    Switch
} from 'react-router-dom'

import Home from '@pages/home'

interface IRouterProps {}

const Router = ({}: IRouterProps) => {
    return (
        <DefaultRouter>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </DefaultRouter>
    )
}

export default Router
