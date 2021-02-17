const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    const date = new Date();
    res.send(date);
});

app.listen(3000,()=>{
    console.log('app  ready')
});