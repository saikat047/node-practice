import * as http from 'http'
import * as os from 'os'
import * as fs from 'fs'

console.log(`OS=${os}`)

const server = http.createServer((req, res) => {
  console.log(`request url=${req.url} method=${req.method}`)
  res.setHeader('Content-Type', 'text/plain')
  res.write('Yay! Started a server')
  res.end()
})

server.listen(8081, 'localhost', () => {
  console.log('Listening on port 8081')
})
console.log('All configuration complete...')

const saikat = {
  name: "Saikat",
  age: 42
}
console.log(`saikat=${saikat}`)
