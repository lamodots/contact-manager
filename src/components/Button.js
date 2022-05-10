import React from 'react'

function Button({props}) {
  return (
    <div> 
        <button className="ui button blue">
            {props}
        </button>
    </div>
  )
}

export default Button