import React from 'react'
import { action } from '@storybook/addon-actions'

import TrackingForm from './TrackingForm'

export default {
    title: 'TrackingForm',
    component: TrackingForm
}

export const DefaultTrackingForm = () => 
    <TrackingForm 
        companies={[
            { code: '04', name: 'CJ대한통운' },
            { code: '05', name: '한진택배' },
            { code: '08', name: '롯데택배' }
        ]}
        placeholder={'운송장 번호를 입력해주세요..'}
        submitText={'조회하기'}
        onSubmit={action('택배조회 폼 데이터')}
    />