
// function sum(a,b){
//     const sum=a+b;
//     return Math.sqrt(sum);
// }

async function fetchData(){
    try {
        const res=await fetch('https://fakestoreapi.com/products')
        if (!res.ok) {
            throw new Error(`API returned status ${res.status}`);
        }
        const jsonres=await res.json();
        console.log('Successfully fetched data from API:', jsonres.length, 'items');
        return jsonres;
    } catch (error) {
        console.error('Error fetching data from API:', error.message);
        throw error;
    }
}

module.exports=fetchData;
