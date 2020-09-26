 const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.send("Hello Node Js")
});

app.listen(300,()=>console.log('listening on port 300'))
