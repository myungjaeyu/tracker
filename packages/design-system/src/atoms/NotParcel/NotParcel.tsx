import React from 'react'

import styled from '@emotion/styled'

const StyledNotParcel = styled.article`
    background-color: #f5f5f5;
    height: 250px;

    h4 {
        padding: 10px 0 0 15px;
        color: #757575;
    }

`

interface INotParcelProps {
    text: string
}

const NotParcel = ({ text }: INotParcelProps) => (
    <StyledNotParcel className='mt-3 d-flex flex-wrap justify-content-center align-content-center'>

        <h4>{ text }</h4>

    </StyledNotParcel>
)

export default NotParcel
