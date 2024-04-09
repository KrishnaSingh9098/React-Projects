import React, { useState } from 'react'

const Clock = () => {
    let [time,setTime] = useState();
    setInterval((

    )=>{
        let a =new Date().toLocaleTimeString();
      //  let b = new Date().toLocaleDateString();
        setTime(a)
    });
  return (
    
    <div>
<h2>{time}</h2>
    </div>
  )
}

export default Clock