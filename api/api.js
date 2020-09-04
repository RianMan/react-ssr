let express = require('express');
let app = express();

app.get('/users', (req, res) => {
    res.json({
        code: 0,
        data:[{name:'zs' ,age: 10,id:1},{name:'zs' ,age: 14,id:2},{name:'zs' ,age: 130,id:3}]
    })
})

app.listen(4000)