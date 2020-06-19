import React from 'react'

import ParcelStatus from './ParcelStatus'

export default {
    title: 'ParcelStatus',
    component: ParcelStatus
}

export const DefaultParcelStatus = () => 
    <ParcelStatus level={1} status={
        [
            {
                no: 1,
                icons: [
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step1_off.png',
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step1_on.png',
                ],
                label: '배송준비중'
            },
            {
                no: 2,
                icons: [
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step1_off.png',
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step1_on.png',
                ],
                label: '집화완료'
            },
            {
                no: 3,
                icons: [
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step2_off.png',
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step2_on.png',
                ],
                label: '배송중'
            },
            {
                no: 4,
                icons: [
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step3_off.png',
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step3_on.png',
                ],
                label: '지점 도착'
            },
            {
                no: 5,
                icons: [
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step4_off.png',
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step4_on.png',
                ],
                label: '배송 출발'
            },
            {
                no: 6,
                icons: [
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step5_off.png',
                    'http://info.sweettracker.co.kr/static/images/ic_default_delivery_step5_on.png',
                ],
                label: '배송 완료'
            },
        ]
    }/>