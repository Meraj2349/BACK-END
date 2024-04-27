const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');

app.use('/',userRoute);



app.use((req,res)=>
{
    res.send('404 page not found');
})

module.exports = app;