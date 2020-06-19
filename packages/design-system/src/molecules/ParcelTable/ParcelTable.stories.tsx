import React from 'react'

import ParcelTable from './ParcelTable'

export default {
    title: 'ParcelTable',
    component: ParcelTable
}

export const DefaultParcelTable = () => 
    <ParcelTable heads={['시간', '현재위치', '배송 상태']} data={[
        {
            datetime: '2020-02-11 11:11:11',
            telno: '남서울터미널',
            kind: '배달전'
        },
        {
            datetime: '2020-02-11 11:11:11',
            telno: '남서울터미널',
            kind: '배달전'
        },
        {
            datetime: '2020-02-11 11:11:11',
            telno: '남서울터미널',
            kind: '배달전'
        },
        {
            datetime: '2020-02-11 11:11:11',
            telno: '남서울터미널',
            kind: '배달전'
        },
        {
            datetime: '2020-02-11 11:11:11',
            telno: '남서울터미널',
            kind: '배달전'
        },
        {
            datetime: '2020-02-11 11:11:11',
            telno: '남서울터미널',
            kind: '배달전'
        }
    ]}/>