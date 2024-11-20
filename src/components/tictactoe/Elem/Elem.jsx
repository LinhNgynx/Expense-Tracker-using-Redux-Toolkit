import React from 'react'

export default function Elem({value, setValue}) {
  return (
    <div onClick={setValue} style={{border: 'solid', width: '20px', height: '20px'}}>{value}</div>
  )
}
