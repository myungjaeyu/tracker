import React from 'react'
import { action } from '@storybook/addon-actions'

import TrackingLogs from './TrackingLogs'
import TrackingLog from './TrackingLog'

export default {
    title: 'TrackingLogs',
    component: TrackingLogs
}

export const DefaultTrackingLogs = () => 
    <TrackingLogs heads={['운송장번호', '받는사람']}>
        <TrackingLog code='04' invoice='02341233124' receiver='홍길동' onTracking={action('로그 데이터')} />
        <TrackingLog code='04' invoice='12341233124' receiver='홍길동' onTracking={action('로그 데이터')} />
        <TrackingLog code='04' invoice='22341233124' receiver='홍길동' onTracking={action('로그 데이터')} />
        <TrackingLog code='04' invoice='32341233124' receiver='홍길동' onTracking={action('로그 데이터')} />
        <TrackingLog code='04' invoice='42341233124' receiver='홍길동' onTracking={action('로그 데이터')} />
    </TrackingLogs>