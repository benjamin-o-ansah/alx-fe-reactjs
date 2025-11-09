import { useState } from "react";

function Counter(){
    const [count,setCount] =useState(0);
    return (
        
        <>
         <p>Current Count: {count}</p>
        <div style={{padding: "10px", margin:"10px", gap:"10px", display:"flex", justifyContent:"center"
        }}>
        
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
       </div></>
        
       
    );
}

export default Counter