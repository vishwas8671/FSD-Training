// console.log("Hello World");
// var a = 20;
// console.log(a);

// var a= 30;
// if(a>20){
//     var a= 50;
//     console.log( "a inside value="+ a);
// }
// else{
//     console.log("Inside else");
// }
// console.log("a outside if-else: "+a);



// function greet(msg){
//     return "Hii ... hello"+msg;
// }
// const msgi=greet("Yuvraj");
// console.log(msgi);



// Functail Expressions
// const data=function greet(msg){
//     return "Hii ... hello"+msg;
// }
// const msgi1=data("Yuvraj");
// console.log(msgi1);


// Arrow Functions
// const data = (msg)=>{
//     return "Hello World "+msg;
// }
// const msgi2=data("Yuvraj");
// console.log(msgi2);



// const data = msg => msg;
// const msgi = data("hello world");
// console.log(msgi);


// IIFE
// (()=>{
//     console.log("Hello World");
// })();


// predefined functions
// setTimeout(()=>{
//     console.log("hello");
// },2000);

// setInterval(()=>{
//     console.log("hello world")
// },3000);



// function greetings(msg="hii"){
//     console.log("Hello" + msg);
// }
// greetings("what is");


function selectlanguage(lang){
    let data;
    if(lang=="java"){
        function javaCompiler(){
            return "hey , java compiler calling...";
        }
        data = javaCompiler();
    }
    else if(lang == 'c'){
        function cCompiler(){
            return "hey , c compiler calling...";
        }
        data = cCompiler();
    }
    else{
        data = "No compiler found";
    }
    return data;
}

console.log(selectlanguage("java"));
console.log(selectlanguage("c"));
console.log(selectlanguage("python"));