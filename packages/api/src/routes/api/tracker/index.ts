import { Router, Response, Request } from 'express'

import { getCompanyList, getRecommend, getTrackingInfo } from '@services/tracker'

const tracker: Router = Router()

tracker.get('/companylist', async (req: Request, res: Response) => {

    const result = await getCompanyList()

    res.json(result)
})

tracker.get('/recommend', async (req: Request, res: Response) => {

    const invoice = req.query.invoice as string

    const result = await getRecommend(invoice)

    res.json(result)
})

tracker.get('/trackinginfo', async (req: Request, res: Response) => {

    const { code, invoice } = req.query as { code: string, invoice: string }

    const result = await getTrackingInfo(code, invoice)

    res.json(result)
})

export default tracker
