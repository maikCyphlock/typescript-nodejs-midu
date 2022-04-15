import Express from 'express'
import DailyRouter from './routes/daily'

const app = Express()

app.use(Express.json())

const PORT = 3000

app.use('/api/daily', DailyRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
