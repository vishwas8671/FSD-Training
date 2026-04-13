import React, { useEffect, useState } from 'react'

// function Dashboard() {
//   const[counter,setCounter] = useState(10);
//   const[pointer,setPointer] = useState(100);

//   useEffect(()=>{
//     console.log(counter);
//     console.log(pointer);
//   },[counter,pointer])
//   return (
//     <div>Dashboard
//       <div>
//         <h2>counter = {counter}</h2>
//         <h2>pointer = {pointer}</h2>
//       </div>

//       <button onClick={()=>setCounter(counter+1)}> Counter</button>
//       <button onClick={()=>setPointer(pointer-10)}> Pointer</button>
//     </div>

//   )
// }


// export default Dashboard



function Dashboard() {

  const[data,setData] = useState([]);
  const[cart,setCart] = useState([]);


  useEffect(()=>{
    async function fetchData(){
      const serverResponse = await fetch('https://fakestoreapi.com/products');
      const jsonData = await serverResponse.json();
      setData(jsonData);
      console.log(jsonData);
    }
    fetchData();
  },[])

  function addToCart(ele){
    // alert(ele.title);
    setCart(item=>[...item,ele]);
    alert(cart.length+1);
  }
  
  return (
    <div>

    <div>
      {
        cart.length === 0?(<h2>Cart is empty</h2>):
        (
          cart.map((ele)=>(
            <div>
              <h2>{ele.title}</h2>
            </div>
          ))
        )
      }
    </div>

      {
        data.length === 0?(<h2>Data is not available</h2>):
        (
          data.map((ele)=>(
            <div style = {{border:'1px solid green'}}>
              <img src={ele.image} height = {100} width={100}></img>
              <h2>{ele.title}</h2>
              <h2>{ele.price}</h2>
              <h4>{ele.description}</h4>
              <h3>{ele.category}</h3>
              <button onClick={()=>addToCart(ele)}>Add to Cart</button>

              </div>
          ))
        )
      }
      {/* {
        JSON.stringify(data)
      }  */}
    </div>
  )
}

export default Dashboard