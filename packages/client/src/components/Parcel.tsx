import React from 'react'

interface ILayoutProps {
    match: any
}

const Parcel = ({ match }: ILayoutProps) => {
    
    console.log('afaf', match)

    const { company, invoice } = match.params

    return (
        <div>

            <h1>조회 출력</h1>

            <h5>{company}</h5>

            <h5>{invoice}</h5>

        </div>
    )
}

export default Parcel