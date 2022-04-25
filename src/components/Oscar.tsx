import React from 'react'

type oscarProps ={
    children:React.ReactNode
}


export default function Oscar(props:oscarProps) {
  return (
    <div>The oscar goes to {props.children}
    </div>
  )
}
