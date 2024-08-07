import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-800">
                Sign Up <span className="text-blue-500">ChatApp</span>
            </h1>

        <form>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Fullname</span>
            </div>
            <input type="text" placeholder="Enter fullname" className="input input-bordered w-full max-w-xs" />
        </label>
        
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Username</span>
            </div>
            <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Password</span>
            </div>
            <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
        </label>

        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Confirm Password</span>
            </div>
            <input type="password" placeholder="Confirm password" className="input input-bordered w-full max-w-xs" />
        </label>
        {/* Gender checkbox goes here */}
        <GenderCheckbox/>
        <a href = "#" className = "text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                Already have an account ?
        </a>
        <br></br>
        <button className="btn btn-block btn-sm mt-2 btn-outline btn-primary">Sign up</button>

        </form>
        </div>

    </div>
  )
}

export default Signup