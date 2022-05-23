const express = require('express')
const app = express()
//Simple hello world node app
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (reg,res)=>{
    res.send('Hello World!')
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})