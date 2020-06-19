import React from 'react'

import styled from '@emotion/styled'

const StyledParcelStatus = styled.article`

    position: relative;

`

const ParcelLine = styled.div`
    position: absolute;
    background-color: #e2e5e8;
    width: 100%;
    height: 1px;
    top: 25px;
    z-index: -1;
`

interface IParcelIcon {
    active: boolean
}

const ParcelIcon = styled.div<IParcelIcon>`${({ active }: IParcelIcon) => `

    text-align: center;

    div {
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }

    p {
        font-size: 10px;
        font-weight: 500;
        color: ${active ? '#212121' : '#757575'};
        margin-top: 6px;
    }

`}
`

interface IStatus {
    no: number,
    icons: string[],
    label: string
}

interface IParcelStatusProps {
    level: number,
    status: IStatus[]
}

const ParcelStatus = ({ level, status }: IParcelStatusProps) => (
    <StyledParcelStatus>

        <ParcelLine />

         <div className='d-flex justify-content-between'>

            {status && status.map((stat, i) => 
                <ParcelIcon key={i} active={level === stat.no}>
                    <div>
                        <img src={stat.icons[+(level === stat.no)]} alt={stat.label} />
                    </div>
                    <p>
                        {stat.label}
                    </p>
                </ParcelIcon>
            )}

        </div>

    </StyledParcelStatus>
)

export default ParcelStatus
