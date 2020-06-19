import { useState, Dispatch, SetStateAction } from 'react'

import { useMount } from 'react-use'

import { ILogs, ILogsState } from '@models/ILogsState'

function useLogs(): ILogsState {
    const [logs, setLogs]: [ILogs[], Dispatch<SetStateAction<ILogs[]>>] = useState([
        { code: '04', invoice: '363301363800', receiver: '박수*' },
        { code: '05', invoice: '508812361761', receiver: '이준*' }
    ])

    const add = (code: string, invoice: string, receiver: string) => setLogs(logs.concat([{ code, invoice, receiver }]))

    useMount(() => console.log('useLogs mount'))

    return {
        logs,
        add
    }
}

export default useLogs
