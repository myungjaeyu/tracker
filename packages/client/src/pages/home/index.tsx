import React, { Fragment } from 'react'

import ITodosState from '@models/ITodosState'

import TodosContainer from '@containers/todos'

import Layout from '@components/Layout'

interface IHomeProps {}

const Home = ({}: IHomeProps) => {
    const { todos, add, remove }: ITodosState = TodosContainer.useContainer()

    return (
        <Layout>
            <Fragment>

                <h1>Home</h1>

            </Fragment>
        </Layout>
    )
}

export default Home
