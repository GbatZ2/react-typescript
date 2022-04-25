import React from 'react'
type ListProps = {
    lista:{
        firstName:string,
        lastName:string
    }[]
}
export default function PersonList(props:ListProps) {
  return (
    <div>

        <h2>{props.lista[0].firstName} {props.lista[0].lastName}</h2>
        <h2>{props.lista[1].firstName} {props.lista[1].lastName}</h2>
        <h2>{props.lista[2].firstName} {props.lista[2].lastName}</h2>
        {props.lista.map(name => (<p>{name.firstName} {name.lastName}</p>))}
    </div>
  )
}
