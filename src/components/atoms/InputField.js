import React from 'react'

function InputField({ className="paper", value, name, handleChange,labelName,type,style,disabled

}) {
  return (
    <div className="row ">
    <div className="col m-2">

    {labelName &&  <label for="textInput mb-2" className="lablestyle">
        {labelName}
      </label> }
     
      <input
      name={name}
      disabled={disabled}
        type={type}
        value={value}
        style={style}
        onChange={handleChange}
        id="textInput"
        className={`form-control ${className}`}
      />
    </div>
    
    </div>
  )
}

export default InputField
