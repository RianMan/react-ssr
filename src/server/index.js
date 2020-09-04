const express = require('express');
const proxy = require('express-http-proxy');

import getHtml from './renderHtml';

const app = express();

// 设置代理解决跨域的问题
app.use('/api', proxy('http://localhost:4000'));
// 设置静态的服务器资源
app.use(express.static('./public'));

app.get('*',(req,res) => {
    getHtml(req,res);
})

app.listen(9000,() => {
    console.log('localhost:9000');
})