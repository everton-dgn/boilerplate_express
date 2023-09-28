import type { Express } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDefinition from './swagger.js'

const options = {
  swaggerOptions: {
    docExpansion: 'list',
    deepLinking: true,
    filter: true
  }
}

const doc = (app: Express) => {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDefinition, options)
  )
}

export default doc
