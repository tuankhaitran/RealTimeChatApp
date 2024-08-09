import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

function Signup() {
    const [inputs,setInputs]=useState({
        fullName:"",
        username:"",
        password:"",
        confirmPassword:"",
        gender:""
    })
    const {loading,signup} = useSignup()
    const handleCheckboxChange=(gender)=>{
        setInputs({...inputs,gender})
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        await signup(inputs)
    }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-800">
                Sign Up <span className="text-blue-500">ChatApp</span>
            </h1>

        <form onSubmit={handleSubmit}>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Fullname</span>
            </div>
            <input 
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
            type="text" placeholder="Enter fullname" className="input input-bordered w-full max-w-xs" />
        </label>
        
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Username</span>
            </div>
            <input 
            value={inputs.username}
            onChange={(e)=>setInputs({...inputs,username:e.target.value})}
            type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Password</span>
            </div>
            <input
            value={inputs.password}
            onChange={(e)=>setInputs({...inputs,password:e.target.value})}
            type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Confirm Password</span>
            </div>
            <input 
            value={inputs.confirmPassword}
            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
            type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs" />
        </label>
        {/* Gender checkbox goes here */}
        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
        <Link to = "/login" className = "text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                Already have an account ?
        </Link>
        <br></br>
        <button className="btn btn-block btn-sm mt-2 btn-outline btn-primary" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span>:"Sign up"}
            </button>

        </form>
        </div>

    </div>
  )
}

export default Signup