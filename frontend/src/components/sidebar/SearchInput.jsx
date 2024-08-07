import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <form className="flex items-center gap-2">
        <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search.." />
        <FaSearch/>
        </label>

        <button className="btn btn-circle btn-primary">
        <FaSearch/>
        </button>
    </form>
)
}

export default SearchInput