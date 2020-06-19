import React from 'react'

import {
    HashRouter as DefaultRouter,
    Route,
    Switch
} from 'react-router-dom'

import Home from '@pages/home'

interface IRouterProps {}

const Router = ({}: IRouterProps) => {
    return (
        <DefaultRouter>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </DefaultRouter>
    )
}

export default Router
