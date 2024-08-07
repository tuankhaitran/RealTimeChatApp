import React from 'react'

export default function GenderCheckbox() {
  return (
    <div className="flex">
        <div className="form-control">
        <label className="label cursor-pointer">
            <span className="label-text">Male</span>
            <input type="radio" name="radio-10" className="mt-2 ml-2 radio checked:bg-red-500" defaultChecked />
        </label>
        </div>
        <div className="form-control">
        <label className="label cursor-pointer">
            <span className="label-text">Female</span>
            <input type="radio" name="radio-10" className="mt-2 ml-2 radio checked:bg-red-500" defaultChecked />
        </label>
        </div>
    </div>
  )
}
