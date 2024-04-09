
// import './App.css';
// import { useState,React, useEffect } from 'react';
// import Clock from './Component/Clock';

// function App() {
//   const [count,setCount] = useState(0)
//   const[data,setData]=useState(0)
//   useEffect(()=>{
//      alert("Welcome frontier Developers")
//   },[])
//   function fghg(){
//     setCount(count +1)
//   }
//   function ata(){
//     setCount(count - 1)
//   }
//   function eroro(){
//     setCount(0)
//   }
//   return (
//     <div className="App">
//       <h1>HEllo React World</h1>
//       <p>Here the value  {count} increses</p>
//       <button onClick={fghg}>Click me!</button>
//       <button onClick={ata}>Negative</button>
//       <button onClick={eroro}>Reset</button>
//       <Clock/>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react'

const App = () => {
  const[input,setInput]=useState()
  const[data,setData]=useState([])
  const  fun1=(e)=>{
setInput(e.target.value)
  }

  const add=()=>{
    setData([...data,input])
    setInput('')
  }

  function delet(id){
    let newArray = data.filter((val,index)=>{
      return index!=id
    })
    setData(newArray)
  }
  return (
    <div>
      <input name='input' value={input} type='text'onChange={fun1} placeholder='Enter tour Todo'/>
      <button onClick={add}>Add</button>
      {
        data.map((a,b,c)=>{
          return(<>
          <li>{a}</li>
          <button onClick={()=>delet(b)}>Delete</button>
          </>)
        })
      }
    </div>
  )
}

export default App