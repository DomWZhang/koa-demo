const { PORT } = require('./config/index')

const app = require('./app/index')

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})