// function sum(a,b){
//     const sum=a+b;
//     return Math.sqrt(sum);
// }

async function fetchData(){
    const res=await fetch('https://fakestoreapi.com/products')
    const jsonres=await res.json();
    // console.log(jsonres)
    return jsonres;
}

module.exports=fetchData;