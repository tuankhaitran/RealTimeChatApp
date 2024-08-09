import React from 'react'

export default function GenderCheckbox({
  onCheckboxChange,
  selectedGender
}) {
  return (
    <div className="flex">
        <div className="form-control">
        <label className="label cursor-pointer">
            <span className="label-text">Male</span>
            <input 
              checked={selectedGender==="male"}
              onChange={()=>onCheckboxChange("male")}
            type="radio" name="radio-10" className="mt-2 ml-2 radio checked:bg-red-500"  />
        </label>
        </div>
        <div className="form-control">
        <label className="label cursor-pointer">
            <span className="label-text">Female</span>
            <input 
            checked={selectedGender==="female"}
            onChange={()=>onCheckboxChange("female")}
            type="radio" name="radio-10" className="mt-2 ml-2 radio checked:bg-red-500"  />
        </label>
        </div>
    </div>
  )
}
