import React from 'react'
import { CustomInput } from 'reactstrap';

function checkboxInput({ id, name, checked, onChange, label }) {
  return (    
  <div>
    <CustomInput
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      label={label}
    />
    </div>


  )
}

export default checkboxInput

