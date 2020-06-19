import React from 'react'

import styled from '@emotion/styled'

const StyledParcelInfo = styled.article`

    label {
        font-weight: normal;
        color: #aaaaaa;
        font-size: 14px;
    }

    div.col-8 {
        font-weight: normal;
        color: #212121;
        font-size: 14px;
        padding-left: 0;
    }

`

interface IParcelInfoProps {
    invoice_label: string, 
    invoice_text: string, 
    to_label: string, 
    to_text: string, 
    from_label: string, 
    from_text: string, 
    address_label: string, 
    address_text: string
}

const ParcelInfo = ({ invoice_label, invoice_text, to_label, to_text, from_label, from_text, address_label, address_text }: IParcelInfoProps) => (
    <StyledParcelInfo>

        <div className='row'>
            <label className='col-4'>{ invoice_label }</label>
            <div className='col-8'>{ invoice_text }</div>
        </div>

        <div className='row'>
            <label className='col-4'>{ to_label }</label>
            <div className='col-8'>{ to_text }</div>
        </div>

        <div className='row'>
            <label className='col-4'>{ from_label }</label>
            <div className='col-8'>{ from_text }</div>
        </div>

        <div className='row'>
            <label className='col-4'>{ address_label }</label>
            <div className='col-8'>{ address_text }</div>
        </div>

    </StyledParcelInfo>
)

export default ParcelInfo
