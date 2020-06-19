import React from 'react'

import styled from '@emotion/styled'

const StyledTrackingLogs = styled.table`

    width: 100%;

    thead {
        background-color: #f5f5f5;

        tr {
            height: 48px;

            th {
                text-align: center;
                font-size: 13px;
                color: #757575;
                vertical-align: bottom;
                border-bottom: 0px;
                padding: 14px;
            }
        }
    }

`

interface ITrackingLogsProps {
    children: any,
    heads: string[]
}

const TrackingLogs = ({ children, heads }: ITrackingLogsProps) => (
    <StyledTrackingLogs>

        <thead>

            <tr>
                { heads.map((head, i) => <th key={i}>{head}</th>) }
            </tr>

        </thead>

        <tbody>
            {children}
        </tbody>

    </StyledTrackingLogs>
)

export default TrackingLogs
