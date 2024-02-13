import React from 'react'
import './InputBox.css'

const InputBox = (props) => {
  return (
        <input 
        className='pop'
        id='input_inb'
        autoFocus={true}
        spellCheck="false"
        value={props.value_p} 
        onChange={(e) => {
          props.handleUserInput_p(e.target.value)
        }}
        ></input>
  )
}

export default InputBox;