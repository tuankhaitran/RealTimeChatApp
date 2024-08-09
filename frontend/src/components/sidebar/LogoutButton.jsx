import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

function LogoutButton() {
  const {logout}=useLogout()
  return (
    <div className="mt-auto">
        <BiLogOut 
        className='w-6 h-6'
        onClick = {logout}
        />
    </div>
  )
}

export default LogoutButton