import React from 'react'

import { Header, TrackingForm, TrackingLogs, TrackingLog } from 'design-system'

interface ILayoutProps {
    onTracking: any
}

const Tracking = ({ onTracking }: ILayoutProps) => {

    return (
        <div>

            <Header title='배송조회' />

            <TrackingForm 
                companies={[
                    { code: '04', name: 'CJ대한통운' },
                    { code: '05', name: '한진택배' },
                    { code: '23', name: '경동택배' }
                ]} 
                placeholder={'운송장 번호를 입력해주세요..'} 
                submitText='조회하기' 
                onSubmit={ onTracking } />

            <Header title='조회이력' />

            <TrackingLogs heads={['운송장번호', '받는 사람']}>

                <TrackingLog code='04' invoice='631632446432' receiver='조은*' onTracking={ onTracking } />
                <TrackingLog code='05' invoice='508812361761' receiver='이준*' onTracking={ onTracking } />

            </TrackingLogs>

        </div>
    )
}

export default Tracking