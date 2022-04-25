
import './App.css';
import Bienvenida from './components/Bienvenida';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/State/LoggedIn';
import User from './components/Context/UserC';
import Counter from './components/Reducer/Counter';
import Box from './components/Context/Box';
import UserC from './components/Context/UserC';
import MutableRef from './components/Ref/MutableRef';
function App() {
 
  const Persona = {
    firstName:"Bruce",
    lastName:"Wayne"
  }
  const PersonaLista = [
    {
    firstName:"Bruce",
    lastName:"Wayne"
    },
    {
      firstName:"Clark",
      lastName:"Kent"
    },
    {
      firstName:"Princess",
      lastName:"Diana"
    }
]
  return (
  


    <div className="App">
        {/*<Bienvenida name={"carlao"} 
                  contadorMensajes={52}
                  logeado={true}/>*/}
        {/*<Person name={Persona} />*/}
        {/*<PersonList lista={PersonaLista}/>*/}
        {/**<Status status="success"/>**/}
        {/*<Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>Di caprio</Heading>
        </Oscar>*/}
        {/*<Bienvenida name={"Carlao"} logeado={true}/>*/}
        {/*<Button handleClick={(event, id )=> console.log("button Click ",event, id)}/>*/}    
        {/*<Input value='' handleChange={(event)=>console.log(event)}/>*/}
        {/**<Container styles={{border: '1px solid black', padding:"1rem"}}/> **/}
        {/*<LoggedIn/>*/}
        {/* <User name="carlao" email="carlso@mail.com"/> */}
        {/*<Counter/>*/}
        {/*<Box/>*/}
        {/**  <UserC/> **/}
        
        </div>
  );
}

export default App;
