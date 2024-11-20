// import "index.css"

import { useState } from "react"

export const ShortCircuit=()=>{
    const[isLoggedIn, setIsLoggedIn]=useState(true)
    const[user, setUser]=useState("")
    return (
        <section className='container short-container'>
            <h1>Welcome to Short Circuit Evaluation!!</h1>

            {isLoggedIn && <p>You are logged in !!</p>}
            {user? `Hello ${user}`: "You are logged in !!"}

            <div className='grid-three-cols'>
                <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
                    Toggle Login State
                </button>
                <button onClick={()=>setUser("Akshay Dhangar")}>
                    Set User
                </button>
                <button onClick={()=>setUser("")}>Clear User</button>
            </div>
        </section>
    )
}