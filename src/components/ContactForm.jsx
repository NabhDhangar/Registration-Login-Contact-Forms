import { useState } from "react"

export const ContactForm=()=>{
    const [userName, setUserName]=useState("");
    const [password,setPassword]=useState('');
    const [message, setMessage]=useState("");
    const handleSubmitButton=(e)=>{
        e.preventDefault();
        const data={
            userName,
            password,
            message
        }
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmitButton}>
            <div className="container">
                <h1>Contact Form</h1>
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
                <div><label htmlFor="message">Message: </label>
                        <textarea 
                            type="text" 
                            name="message" 
                            placeholder="Enter Your Message" 
                            autoComplete="off"
                            rows="5"
                            value={message}
                            onChange={(e)=>setMessage(e.target.value)}/></div>
                <button type="submit">Send Message</button>
            </div>
        </form>
    )
}