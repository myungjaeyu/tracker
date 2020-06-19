import requset from '@commons/request'

export const getTrackingInfo = async (code: string, invoice: string) =>
    requset(`/api/tracker/trackinginfo?code=${code}&invoice=${invoice}`, {
        method: 'GET'
    })
