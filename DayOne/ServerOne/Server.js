const http = require("http")
const port = 3000
const server = http.createServer((req,res)=>{
  res.end("Hello From Server!!!...")
})

server.listen(port, () =>{
    console.log(`server running on http://localhost:${port}`)
})