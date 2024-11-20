import { useState } from "react"

export const LoginReact=()=>{
    const [userName,setUserName]=useState("");
    const [password, setPassword]=useState("");
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(userName,password);
    }
    return(
        
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                <h1>Login Form</h1>
                <div><label htmlFor="userName">Used ID: </label>
                        <input 
                            type="text" 
                            name="userName" 
                            placeholder="Enter userName" 
                            required
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}/></div>
                <div><label htmlFor="password">Password: </label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter password" 
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/></div>
                <button type="submit">Login</button>
                </div>
            </form>
        
    )
}