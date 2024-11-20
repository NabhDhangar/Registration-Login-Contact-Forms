import { useState } from "react"

export const CounterChallenge=()=>{
    const[count,SetCount]=useState(0)
    const[num,setNum]=useState(0)
    return(
        <div className="container state-container">
            <h1>useState Challenge!!</h1>
            <p>
                Count:<span>{count}</span>
            </p>
            <div>
                <label>
                    Step:<input type="number" value={num} onChange={(e)=>setNum(Number(e.target.value))}/>
                </label>
            </div>
            <div className="grid-three-cols">
                <button onClick={()=>SetCount(count+num)} disabled={count>=100}>Increment</button>
                <button onClick={()=>SetCount(count-num)} disabled={count<=0}>Decrement</button>
                <button onClick={()=>SetCount(0)}>Reset</button>
            </div>
            <div>
                <h3>History</h3>
            </div>
        </div>
    )
}