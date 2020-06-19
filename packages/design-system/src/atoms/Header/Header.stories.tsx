import React from 'react'

import Header from './Header'

export default {
    title: 'Header',
    component: Header
}

export const DefaultHeader = () => [
    <Header title='택배정보'/>,
    <Header title='배송상세'/>,
    <Header title='배송 조회'/>,
    <Header title='조회 이력'/>
]