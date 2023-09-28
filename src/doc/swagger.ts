const port = Number(process.env.APP_PORT)

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Example API',
    version: '1.0.0'
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: 'Local development server'
    }
  ],
  paths: {
    '/': {
      get: {
        tags: ['message'],
        summary: 'Returns a message',
        responses: {
          '200': {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    '/abc': {
      get: {
        tags: ['abc'],
        summary: 'Returns ABC',
        responses: {
          '200': {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

export default swaggerDefinition
