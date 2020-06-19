import React, { Fragment } from 'react'

interface ILayoutProps {
    children: any
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <Fragment>

            {children}
        </Fragment>
    )
}

export default Layout
