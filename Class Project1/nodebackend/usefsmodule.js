const fs=require('fs')
const fs1=require('fs').promises

function writeData(){
    let statusmsg="";
    try{
        fs.writeFileSync("student.txt","Welcome to FS Module")
        console.log("Data is written successfully!!")
        statusmsg="Data is written successfully!!";
    }catch(e){
        console.log("Error is"+e)
        statusmsg="Error is"+e;
    }
    return statusmsg;
}

function readData(){
    let statusmsg="";
    try{
         const data=fs.readFileSync('student.txt',{encoding:'utf-8'})
         statusmsg=data;
    }catch(e){
       statusmsg=e;
    }
    return statusmsg;
}



function deleteFile(){
    let statusmsg="";
    try{
         fs.unlinkSync('student.txt')
         statusmsg="File deleted successfully"

    }catch(e){
     statusmsg=e
    }
return statusmsg
}


function dataCopy(){

}

async function fileReadAsync(){
    let statusmsg="";
    try{
      statusmsg=await fs1.readFile('student.txt',{encoding:'utf-8'})
    }catch(e){
     statusmsg=e;
    }
return statusmsg
}

const obj={writeData,readData,deleteFile,fileReadAsync}

module.exports=obj;
