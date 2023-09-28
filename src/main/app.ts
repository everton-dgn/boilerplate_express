import express from 'express'
import type { Request, Response } from 'express'
import 'dotenv/config'
import doc from 'doc/index.js'

const app = express()
doc(app)

app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

app.get('/abc', (_req: Request, res: Response) => {
  res.json({ message: 'abc' })
})

export default app
