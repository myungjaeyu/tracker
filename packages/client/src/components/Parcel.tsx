import React, { useState, useEffect } from 'react'

import { getTrackingInfo } from '@services/tracker'

import { Header, ParcelInfo, ParcelStatus, ParcelTable } from 'design-system'

import _status from '@commons/parcelStatus.json'

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
                    datetime: timeString,
                    where,
                    kind
                }))
            )

        })

    })

    return (
        <div>

            <Header title='택배정보' />

            <ParcelInfo 
                invoice_label='운송장번호'
                invoice_text={invoiceNo}
                to_label='받는 사람'
                to_text={receiverName}
                from_label='보낸 사람'
                from_text={senderName}
                address_label='수령 주소'
                address_text={receiverAddr}
            />

            <Header title='배송상세' />

            <ParcelStatus level={level} status={_status}/>

            <ParcelTable heads={['시간', '현재 위치', '배송 상태']} data={trackingDetails}/>

        </div>
    )
}

export default Parcel