const http = require('http')
const server = http.createServer((req: any , res: any) => {
        console.log(`request url=${req.url} method=${req.method}`)
        res.setHeader('Content-Type', 'text/plain')
        res.write('Yay! Started a server')
        res.end()
})

server.listen(8081, 'localhost', () => {
        console.log('Listening on port 8081')
})

console.log('All configuration complete...')
