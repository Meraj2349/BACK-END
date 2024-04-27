const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');
route.use(bodyParser.json());

const fs= require('fs');




route.get('/',(req,res)=>
{
    res.send('get sent a response');
})

// route.get('/about',(req,res)=>

// {
//     // res.status(200).json(
//     //     {
//     //         message:'about page',
//     //         statusCode :200,
//     //     }
//     // );
//    res.redirect('/api/user/login');
// })
route.use('/login',(req,res)=>

{
    res.send('login page');
    const id =req.query.id;
    res.send(`login page ${id}`);

})
route.post('/about',(req,res)=>
{
   // res.statusCode=200;
    // res.sendFile(__dirname+'/views/about.html');
    // const id =req.query.id;
    // res.send(`login page ${id}`);

    // const idd= req.header('id');

    //   const name = req.header('name');

    //   res.send(`id is ${idd} and name is ${name}`);

//    const data= req.body;

//    fs.writeFile('data.json',JSON.stringify(data),(err)=>
//    {
//          if(err)
//          {
//               console.log(err);
//          }
//          else
//          {
//               console.log('data saved');
//          }
//    })

const fullname = req.body.fullname;
const age = req.body.age;

    
   
})



module.exports = route;