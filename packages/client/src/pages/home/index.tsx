import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import ITodosState from '@models/ITodosState'

import TodosContainer from '@containers/todos'

import Layout from '@components/Layout'
import Parcel from '@components/Parcel'
import Tracking from '@components/Tracking'

import { NotParcel } from 'design-system'

interface IHomeProps {
    match: any,
    history: any
}

const Home = ({match, history }: IHomeProps) => {

    const { todos, add, remove }: ITodosState = TodosContainer.useContainer()

    const onTracking = (code, invoice) => {

        history.push(`/${code}/${invoice}`)

    }

    return (
        <Layout>
            <Fragment>

                <div className='container'>

                    <div className='row'>

                        <section className='col-md-6'>

                            <Route exact path={match.path} render={() => <NotParcel text='조회 내역이 없습니다.' />} />
                            <Route path={`${match.path}:company/:invoice`} component={Parcel} />

                        </section>

                        <section className='col-md-6'>

                            <Tracking onTracking={data => onTracking(data.code, data.invoice)}/>

                        </section>

                    </div>
                </div>

            </Fragment>
        </Layout>
    )
}

export default Home
