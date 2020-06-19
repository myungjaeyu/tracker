import React from 'react'

import styled from '@emotion/styled'

const StyledHeader = styled.article`
    background-color: #f5f5f5;
    border-top: 1px solid #d8d8d8;
    height: 48px;

    h1 {
        padding: 10px 0 0 15px;
        font-size: 16px;
        color: #212121;
    }

`

interface IHeaderProps {
    title: string
}

const Header = ({ title }: IHeaderProps) => (
    <StyledHeader>

        <h1>{ title }</h1>

    </StyledHeader>
)

export default Header
