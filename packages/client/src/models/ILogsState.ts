export interface ILogs {
    code: string,
    invoice: string,
    receiver: string
}

export interface ILogsState {
    logs: ILogs[]
    add: (code: string, invoice: string, receiver: string) => void
}