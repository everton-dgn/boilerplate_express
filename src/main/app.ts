import express from 'express'
import type { Request, Response } from 'express'
import 'dotenv/config'
import doc from 'doc'
import pinoHttp from 'pino-http'

const app = express()
app.use(express.json())
const enabled = JSON.parse(process.env.LOGGER_ENABLED || 'false')
const logger = pinoHttp({ enabled })
app.use(logger)
doc(app)

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

app.get('/abc', (_req: Request, res: Response) => {
  res.json({ message: 'abc' })
})

export default app
