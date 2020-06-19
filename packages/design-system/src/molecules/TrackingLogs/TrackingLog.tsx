import React from 'react'

import styled from '@emotion/styled'

const StyledTrackingLog = styled.tr`

    border-bottom: 1px solid #e1e1e1;

    td {
        text-align: center;
        padding: 11px;
        line-height: 1.42857143;
        vertical-align: middle;
        border-top: 0px;
        color: #757575;
    }

`

interface ITrackingLogProps {
    invoice: string,
    receiver: string,
    onTracking: any
}

const TrackingLog = ({ invoice, receiver, onTracking }: ITrackingLogProps) => (
    <StyledTrackingLog onClick={() => onTracking({ invoice, receiver })}>

        <td>{invoice}</td>

        <td>{receiver}</td>

    </StyledTrackingLog>
)

export default TrackingLog
