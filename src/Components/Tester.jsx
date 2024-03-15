import React from 'react'

const Tester = ({name, des, bg, Color}) => {
  return (
    <div 
    style={{ background: `${bg}`, color: `${Color}`, margin: "20px", padding: "20px", outLine: "none", border: "none", 
    borderRadius: "7px",}} 
    >
      <h1>{name}</h1>
      <p>{des}</p>
    
    </div>
  )
}

export default Tester