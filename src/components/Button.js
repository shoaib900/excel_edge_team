import React from 'react'

const Button = ({onClick, children}) => {
    function handleClick(){
        alert("button clicked")
    }
  return (
    <button onClick={handleClick} className='btn btn-primary'>{children}</button>
  )
}

export default Button
