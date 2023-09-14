const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send('Hello node.js')
})

app.post('/buyme', (req, res)=>{
    const pid = req.body.pid
    const price = req.body.price
    res.json({'pid': pid, 'price': price})
})

app.listen(3000, ()=>{
    console.log('start server')
})