import Express from 'express'

import * as DailyServices from '../services/dailyServices'
import toNewDailyEntry from '../utils/utils'

const route = Express.Router()

route.get('/', (_req, res) => {
  res.send(DailyServices.getEntriesWithoutSensitiveInfo())
})

route.get('/:id', (req, res) => {
  const daily = DailyServices.findById(parseInt(req.params.id))
  return (daily != null) ? res.send(daily).status(200) : res.status(404).send({ status: 'not found' })
})

route.post('/', (req, res) => {
  try {
    const NewDailyEntry = toNewDailyEntry(req.body)

    const AddedDailyEntry = DailyServices.AddDaily(NewDailyEntry)

    res.json(AddedDailyEntry)
  } catch (e: any) {
    res.status(404).send(e.message)
  }
})

export default route
