import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin'

function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const {loading, login}=useLogin()
    const handleSubmit=async (e)=>{
        e.preventDefault();
        await login(username,password)
    }
  return (
    <div  className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3xl font-semibold text-center text-black-800'>Login 
            <span className="text-blue-500">ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Username</span>
            </div>
            <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </label>

            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Password</span>
            </div>
            <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>

            <a href = "/signup" className = "text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                Don't have an account ?
            </a>
            <br></br>
            <button className="btn btn-block btn-sm mt-2 btn-outline btn-primary" disabled={loading}>
                {loading ?<span className="loading loading-spinner"></span>:"Login"}
            </button>

            </form>
        </div>

    </div>
  )
}

export default Login