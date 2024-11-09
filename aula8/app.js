const express = require('express')
const bodyParser = require('body-parser')
const admin = require('firebase-admin')
const app = express()
const port = 3000

app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`)
        
})

app.get('/', (req,res)=>{
    res.render('Index')

})

app.get('/cadastrar', (req,res)=>{
    res.render('formulario')
})

app.post ('/', (req,res)=>{
    const id = req.body.id
    const nome = req.body.nome
    const idade = req.body.idade

    db.ref('users/'+id).set({ nome, idade})
    .then(()=>res.send('Dados Salvos com sucesso no Firebase'))
    .catch(error => res.status(500).send('Erro ao salvar dados:' + error.massge))
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const serviceAccount = require('./firebase-config.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: https://minimix-93789-default-rtdb.firebaseio.com/
})

const db = admin.database()