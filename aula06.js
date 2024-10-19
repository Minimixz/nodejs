const http = requires ('http')

http.createServer((req,res)=>{
    res.end('Ola Servidor')
}).listen(8081,()=>{
    console.groupCollapsed('Servidor Rodando')
})