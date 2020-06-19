import requset from '@commons/request'

const t_key = 'kquvB8RZKmCLf8liJZ9Q5Q'
const baseURL = 'http://info.sweettracker.co.kr'
const apiVersion = 'v1'

export const getCompanyList = async () =>
    requset(`${baseURL}/api/${apiVersion}/companylist?t_key=${t_key}`, {
        method: 'GET'
    })

export const getRecommend = async (invoice: string) =>
    requset(`${baseURL}/api/${apiVersion}/recommend?t_key=${t_key}&t_invoice=${invoice}`, {
        method: 'GET'
    })

export const getTrackingInfo = async (code: string, invoice: string) =>
    requset(`${baseURL}/api/${apiVersion}/trackingInfo?t_key=${t_key}&t_code=${code}&t_invoice=${invoice}`, {
        method: 'GET'
    })