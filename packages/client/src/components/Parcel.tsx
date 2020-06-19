import React, { useState, useEffect } from 'react'

import { getTrackingInfo } from '@services/tracker'

interface ILayoutProps {
    match: any
}

const Parcel = ({ match }: ILayoutProps) => {

    const { company, invoice } = match.params

    const [url, setUrl] = useState('/')
    const [invoiceNo, setInvoiceNo] = useState('')
    const [receiverName, setReceiverName] = useState('')
    const [senderName, setSenderName] = useState('')
    const [receiverAddr, setReceiverAddr] = useState('')
    const [level, setLevel] = useState(0)
    const [trackingDetails, setTrackingDetails] = useState([])

    useEffect(() => {

        match.url !== url && getTrackingInfo(company, invoice).then((data: any) => {

            setUrl(match.url)
            setInvoiceNo(data.invoiceNo)
            setReceiverName(data.receiverName)
            setSenderName(data.senderName)
            setReceiverAddr(data.receiverAddr)
            setLevel(data.level)
            setTrackingDetails(
                data.trackingDetails.map(({ timeString, where, kind }) => ({
                    timeString,
                    where,
                    kind
                }))
            )

        })

    })

    return (
        <div>

            <h1>조회 출력</h1>

            <h5>{invoiceNo}</h5>

            <h5>{receiverName}</h5>

            <h5>{senderName}</h5>

            <h5>{receiverAddr}</h5>

            <h5>{level}</h5>

            {trackingDetails.map((detail, i) => 
                <p key={i}>
                    { detail.timeString} | 
                    { detail.where} | 
                    { detail.kind} 
                </p>
            )}

        </div>
    )
}

export default Parcel