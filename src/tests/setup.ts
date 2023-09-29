import supertest from 'supertest'
import app from 'main/app'

const port = Number(process.env.APP_PORT)
const server = app.listen(port)
const request = supertest(server)

afterAll(async () => {
  await new Promise<void>((resolve, reject) => {
    server.close(err => {
      if (err) reject(err)
      else resolve()
    })
  })
})

export default request
