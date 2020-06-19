import React from 'react'
import { useForm } from 'react-hook-form'

import styled from '@emotion/styled'

const StyledTrackingForm = styled.form`

`

interface ICompany {
    code: string,
    name: string
}

interface IStyledParcelProps {
    companies: ICompany[],
    placeholder: string,
    submitText: string,
    onSubmit: any
}

const StyledParcel = ({ companies, placeholder, submitText, onSubmit }: IStyledParcelProps) => {

    const { register, handleSubmit } = useForm()

    return (
        <StyledTrackingForm className='row m-0' onSubmit={handleSubmit(onSubmit)}>

            <select className='col-4 form-control' name='code' ref={register({ required: true })}>

                {companies.map((company, i) => 
                    <option key={i} value={company.code}>
                        {company.name}
                    </option>)}

            </select>

            <input className='col-8 form-control' type='text' name='invoice' ref={register({ required: true })} placeholder={placeholder} />

            <button className='btn btn-light btn-block'>
                {submitText}
            </button>

        </StyledTrackingForm>
    )
}

export default StyledParcel
