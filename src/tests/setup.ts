import supertest from 'supertest'
import app from 'main/app'

const port = Number(process.env.APP_PORT)
const request = supertest(app.listen(port))

export default request
