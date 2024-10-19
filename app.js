const express = require('express')

const app = express()
const msg = '45'

app.get('/', (req, res) => {
    res.send('Olá Servidor')
})


app.get('/login', (req,res) => {
    res.send(msg.toString()) 
})


app.get('/users/:id:/:nome',(req,res)=>{
    var id =req.params.id
    var nome =req.params.nome
    res.send('id:'+id+' <br>nome: '+nome)
})


app.listen(8081, () => {
    console.log('Servidor Rodando em http://localhost:8081')
})
