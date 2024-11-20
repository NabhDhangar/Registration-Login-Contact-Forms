import { useState } from "react"

export const RegistrationReact=()=>{
    // const [firstName, setFirstName]=useState("");
    // const [lastName, setLastName]=useState("");
    // const [email, setEmail]=useState("");
    // const [password, setPassword]=useState("");
    // const [phoneNumber, setPhoneNumber]=useState("");
    const [user, setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:"",
    });

    const handleFormSumbit=(event)=>{
        event.preventDefault();
        // const formData={
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     phoneNumber,
        // }
        console.log(user);
    }

    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setUser((prev)=>({...prev, [name]:value}));
    }
    
    return(
        <>
            <form onSubmit={handleFormSumbit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in the form to Create Account.</p>

                    <div><label htmlFor="firstName">First Name: </label>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="Enter FirstName" 
                        required
                        value={user.firstName}
                        onChange={handleInputChange}/></div>
                    
                    <div><label htmlFor="lastName">Last Name: </label>
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Enter lastName" 
                        required
                        value={user.lastName}
                        onChange={handleInputChange}/></div>

                    <div><label htmlFor="email">Email: </label>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Enter Email" 
                        required
                        value={user.email}
                        onChange={handleInputChange}/></div>

                    <div><label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter passwod" 
                        required
                        value={user.password}
                        onChange={handleInputChange}/></div>
                    
                    <div><label htmlFor="phoneNumber">Phone Number: </label>
                    <input 
                        type="number" 
                        name="phoneNumber" 
                        placeholder="1234567890" 
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange}/></div>

                    <p>
                        By Creating an account you agree to our 
                        <span><a>Terms & Policy</a></span>
                    </p>
                    <button type="submit">Sign Up</button>
                </div>
                <section>
                daa
                </section>
            </form>
        </>
    )
}