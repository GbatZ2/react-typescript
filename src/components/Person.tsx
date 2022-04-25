

type PersonaProps={
    name:{
        firstName:string,
        lastName:string
    }
}

 
 function Person(props:PersonaProps) {
  return (
    <div>

        <p>{props.name.firstName} {props.name.lastName}</p>

    </div>
  )
}
export default Person
