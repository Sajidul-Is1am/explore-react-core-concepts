import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0)
    const handleAdd = () =>{
        const increament_count = count +1;
        setCount(increament_count);
    }

    const handleAd = () =>{
        const increament_coun = count - 1;
        setCount(increament_coun);
    }
    return(
        <div style={{border:'2px solid white',margin:'20px',padding:'20px',borderRadius:'20px'}}>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Incremenent</button>

            <button onClick={handleAd}>Decremenent</button>
        </div>
    )
}