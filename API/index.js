const express = require('express')
const app = express()

app.listen('3000')

//middleware
app.use(express.json())

let author = "João"
let deleatable = "Don't erase this"

app.route('/').get((req,res)=>res.send(author + " "+deleatable))

app.route('/').post((req,res) => res.send(req.body))

app.route('/').put((req,res) => {
    author = req.body.author
    res.send(author + " "+deleatable)
})



app.route('/').delete((req,res)=>{
    deleatable = ''
    res.send('apagado')
})