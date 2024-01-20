console.log('hellow world server side js ')

import express from "express"

const app = express()
const PORT = 8000

// http://183.183.118.104:8000
app.get('/', (req, res) => {
    console.log('hello world!', new Date());
    res.send('hello wordl' + new Date());
})

app.get('/profile', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('this is profile' + new Date());
})

app.get('/home', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('this is profile' + new Date());
})


app.listen(PORT, () =>{
    console.log(`example app listening on port ${PORT}`)
})