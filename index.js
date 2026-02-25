const http = require('http');
const {fetchData} = require('./fetchData');
const fs = require('fs').promises;
const {writeData,readData,deleteFile,dataCopy,fileReadAsync} = require('./usefsmodule');

const port = 4007;

const server = http.createServer(async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');

  console.log('Request received');

  if (req.url === '/msg' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>Welcome message from node server</h1>");
  }

  if(req.url=='/data' && req.method=='GET'){
    res.setHeader('Content-Type', 'application/json');
    const sumData = await fetchData();
    res.end(JSON.stringify({msg:sumData}));
  }

  if(req.url=='/writeData' && req.method=='GET'){  
    res.setHeader('Content-Type', 'application/json');
    const sumData = writeData();
    res.end(JSON.stringify({msg:sumData}));
  }

  if(req.url=='/readData' && req.method=='GET'){
    res.setHeader('Content-Type', 'application/json');
    const sumData = readData();
    res.end(JSON.stringify({msg:sumData}));
  }

  if(req.url=='/deleteFile' && req.method=='GET'){
    res.setHeader('Content-Type', 'application/json');
    const sumData = deleteFile();
    res.end(JSON.stringify({msg:sumData}));
  }

  if(req.url=='/dataCopy' && req.method=='GET'){
    res.setHeader('Content-Type', 'application/json');
    const sumData = dataCopy();
    res.end(JSON.stringify({msg:sumData}));
  }

  if(req.url=='/fileReadAsync' && req.method=='GET'){
    res.setHeader('Content-Type', 'application/json');
    const sumData = await fileReadAsync();
    res.end(JSON.stringify({msg:sumData}));
  }

  if(req.url=='/register' && req.method=='POST'){
    let arr = [];
    let body = "";

    req.on('data',chunk=>{
      body += chunk;
    });

    req.on('end', async ()=>{
      const {name,email,password} = JSON.parse(body);

      const fdata = await fs.readFile('student.json',{encoding:'utf-8'});
      arr = JSON.parse(fdata);

      const status = arr.find(ele=>ele.email==email);

      if(status){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({msg:"student is already exists"}));
      } else {
        arr.push({name,email,password});

        await fs.writeFile('student.json',JSON.stringify(arr,null,2));

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({msg:"student is registered successfully"}));
      }
    });
  }
if(req.url=='/login' && req.method=="POST"){
   let arr = [];
    let body = "";
     req.on('data',chunk=>{
      body += chunk;
    })
    req.on('end', async ()=>{
      const {email,password} = JSON.parse(body);
      const fdata = await fs.readFile('student.json',{encoding:'utf-8'});
      arr = JSON.parse(fdata);

      const status = arr.find(ele=>ele.email==email && ele.password==password);
      if(status){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({msg:"login successful"}));
      } else {
res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({msg:"invalid"}));
      }

})

  }

});

server.listen(port, () => {
  console.log(`service is available at ${port}`);
});