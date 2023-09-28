import app from './app'

const port = Number(process.env.APP_PORT)

app
  .listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running: http://localhost:${port}`)
  })
  .on('error', (err: Error) => {
    // eslint-disable-next-line no-console
    console.error(err)
  })
