import React from 'react'

import ParcelInfo from './ParcelInfo'

export default {
    title: 'ParcelInfo',
    component: ParcelInfo
}

export const DefaultParcelInfo = () => 
    <ParcelInfo 
        invoice_label="운송장번호" 
        invoice_text="359125159761" 
        to_label="받는 사람" 
        to_text="장비*" 
        from_label="보낸 사람" 
        from_text="프리*" 
        address_label="수령 주소" 
        address_text="경상북도 안동******" />