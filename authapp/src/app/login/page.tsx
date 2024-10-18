"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
    const [user,setUser]=React.useState({
        email:"",
        password:"",
        
        
    })
    const onLogin = async () => {
        
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  py-2 text-2xl">
            <h1>Login</h1>
            <hr/>
            
            
            

<label htmlFor="email">email</label>
            <input 
            className="border border-solid border-black px-2 py-1 mb-2 rounded-lg "
            type="text"
            id="email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder="email"
            
            />
            <label htmlFor="password">username</label>
            <input 
            className="border border-solid border-black px-2 py-1 mb-2 rounded-lg "
            type="password"
            id="password"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder="password"
            
            />

            <button
            onClick={onLogin}
            className="border border-solid border-green-500 px-2 py-1 mb-2 rounded-lg "
            >Login</button>
            <Link href="/signup">Not Have an account? Sign Up Here</Link>

        </div>
    );
}
