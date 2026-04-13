import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  async function getData() {
    try {
      setLoader(true);
      const res = await fetch('http://localhost:4007/data');
      const jsondata = await res.json();
      console.log(jsondata); // check structure
      setData(jsondata.msg); // change if needed
    } catch (e) {
      console.log(e);
    } finally {
      setLoader(false);
    }
  }

  function cartData(dataitem) {
    alert(dataitem.title);
  }

  return (
    <>
      <h2>Welcome to react app</h2>

      {data.map((ele) => (
        <div key={ele.id}>
          <img src={ele.image} height={200} width={200} alt={ele.title} />
          <h2>{ele.id}: {ele.title}</h2>
          <h3>{ele.title}</h3>
          <button onClick={() => cartData(ele)}>Add to cart</button>
        </div>
      ))}

      {loader && <h2 style={{ color: 'red' }}>Data is Loading...</h2>}

      <button onClick={getData}>FetchData</button>
    </>
  );
}

export default App;