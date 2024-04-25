const fs = require('fs');

fs.writeFile('message.txt','hellow meraj',((err)=>
{
  if(err) console.log(err);
  else console.log('file created');

}))

fs.readFile('message.txt','utf-8',(err,data)=>
{
    if(err) console.log(err);
  else console.log(data);
})
