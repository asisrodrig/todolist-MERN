const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
  res.send('Hello World!');
})

app.get('/sum/:a/:b',(req,res)=>{
    const a=parseInt(req.params['a'])
    const b=parseInt(req.params['b'])
    const c=a+b
    res.send(c.toString())
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


