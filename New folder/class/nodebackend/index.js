const http=require('http');
 const sum=require('./fetchData');
const fs=require('fs').promises
const {writeData,readData,deleteFile,fileReadAsync}=require('./usefsmodule');

const PORT=4007;
const server=http.createServer( async(req,res)=>{
//     res.setHeader('Content-Type','text/html');
// res.end("<h2 style=color:red>Hello, Welcome to Node Server</h2>");
res.setHeader('Access-Control-Allow-Origin', '*'); // Or '' to allow all
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests (OPTIONS method)
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
     
if(req.url=='/msg' && req.method=="GET"){
    res.setHeader('Content-Type','text/html');
    res.end("<h1>Welcome message from Node Server</h1>");
}

if(req.url=='/data' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=await sum();
     res.end(JSON.stringify({msg:sumData}))
   
}

if(req.url=='/writeData' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=writeData();
     res.end(JSON.stringify({msg:sumData}))
   
}

if(req.url=='/readData' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=readData();
     res.end(JSON.stringify({msg:sumData}))
   
}

if(req.url=='/deleteFile' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=deleteFile();
     res.end(JSON.stringify({msg:sumData}))
   
}
if(req.url=='/readFileAsync' && req.method=="GET"){
  
res.setHeader('Content-Type','application/json');
   const sumData=await fileReadAsync()
     res.end(JSON.stringify({msg:sumData}))
   
}
// if(req.url=='/data' && req.method=="POST"){
//    res.setHeader('Content-Type','application/json');
//     res.end(JSON.stringify({msg:"Post method for data insertion"})); 
// }

if(req.url=='/register' && req.method=="POST"){

  let arr=[]
  let body="";
  req.on('data',chunk=>{
    body+=chunk
  })

  req.on('end',async()=>{
  const {name,email,password}=JSON.parse(body);
   console.log(name+email+password)
        const fdata=await fs.readFile('student.json',{encoding:'utf-8'})
               arr=JSON.parse(fdata);

               const status=arr.find(ele=>ele.email==email)

               if(status){
                res.setHeader('Content-Type','application/json');
 
              res.end(JSON.stringify({msg:"Student is already registered"}))
               }else{
                arr.push({name,email,password})
                await fs.writeFile('student.json',JSON.stringify(arr,null,2));
                 res.setHeader('Content-Type','application/json');
 
              res.end(JSON.stringify({msg:"Student registered seccessfully!!!"}))
               }
  
      })
  

   
}

if(req.url=='/login' && req.method=="POST"){

    let arr=[]
  let body="";
  req.on('data',chunk=>{
    body+=chunk
  })

  req.on('end',async()=>{
const {email,password}=JSON.parse(body);
    const fdata=await fs.readFile('student.json',{encoding:'utf-8'})
               arr=JSON.parse(fdata);

const status=arr.find(ele=>ele.email==email && ele.password==password) 
       if(status){
        res.setHeader('Content-Type','application/json');
 
    res.end(JSON.stringify({msg:"success"}))
       }else{
         res.setHeader('Content-Type','application/json');
 
    res.end(JSON.stringify({msg:"Invalid user"}))
       }
  })

}

})

server.listen(PORT,()=>{
    console.log(`Service is available at ${PORT}`)
})