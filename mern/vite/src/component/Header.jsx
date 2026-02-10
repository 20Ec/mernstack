import React from 'react'

const Header = (props) => {
  return (
     <div>
        
      <p>{props.title}  : this is a prop.title</p>
      <p>{props.subtitle}</p>

    </div>
  )
}

export default Header
